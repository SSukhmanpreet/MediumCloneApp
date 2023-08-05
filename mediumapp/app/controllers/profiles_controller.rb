class ProfilesController < ApplicationController
    # before_action :authorize_request, except: :create
    # skip_before_action :verify_authenticity_token
    before_action :authenticate_request

    def authenticate_request
        token = request.headers['Authorization']
        if token
          # user = decode_and_verify_token(token)
          user = User.find_by(id: token.split(' ')[1])
        #   render json: user
          if user
            @current_user = user
            # render json: @current_user
          else
            render json: { error: 'Unauthorized' }, status: :unauthorized
          end
        else
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
    end

    def show
        @user = User.find(params[:id])
        @profile = @user.profile
        @articles = @user.articles
        render json: @user.profile
    end

    def my_profile
        @user = @current_user
        @profile = @user.profile
        @articles = @user.articles
        render json: @user.profile
    end
    
    def follow
      @user= User.find(params[:id])
      @current_user.follow(@user)
      render json: "Following user"
    end

    def unfollow
      @user= User.find(params[:id])
      @current_user.unfollow(@user)
      render json: "Unfollowing user"
    end


end
