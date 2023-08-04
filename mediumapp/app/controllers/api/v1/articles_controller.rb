class Api::V1::ArticlesController < ApplicationController
  # before_action :set_article, only: %i[ show update destroy ]
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user, only: [:create]
  # GET /articles
  def index
    def index
      @articles = Article.all
  
      # Filter by author if author param is provided
      @articles = @articles.where(author: params[:author]) if params[:author].present?
  
      # Filter by date if date param is provided
      @articles = @articles.where("DATE(created_at) = ?", params[:date]) if params[:date].present?
  
      # Filter by number of likes if likes param is provided
      @articles = @articles.where(post_likes: params[:post_likes]) if params[:post_likes].present?
  
      # Filter by number of comments if comments param is provided
      @articles = @articles.where(post_comments: params[:post_comments]) if params[:post_comments].present?
  
      render json: @articles
    end
  end
  def create
    @article = Article.new(article_params)
    if @article.save
       
    else
    render :new
    end
  end

  def delete
      render json: Article.destroy_by(id: params[:id])
  end
  def update 
      article1 = Article.find_by(id: params[:id])
      article1.update(title: params[:title], topic: params[:topic], file: params[:file], description: params[:description], author: params[:author])
      render json: Article.all()
  end

  def search
    search_query = params[:query].downcase

    # Search articles based on title, topic, or author (with partial matching for title)
    @articles = Article.where("LOWER(title) LIKE ? OR LOWER(topic) LIKE ? OR LOWER(author) LIKE ?", "%#{search_query}%", "%#{search_query}%", "%#{search_query}%")

    render json: @articles
  end

  private

  def article_params
      params.require(:article).permit(:title, :topic, :file, :description, :author) # Or :files for multiple attachments
  end

  def authenticate_user
    token = request.headers['Authorization']&.split(' ')&.last
    payload = User.decode_token(token)

    unless payload
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
