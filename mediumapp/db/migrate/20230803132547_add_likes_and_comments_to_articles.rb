class AddLikesAndCommentsToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :post_likes, :integer
    add_column :articles, :post_comments, :integer
  end
end
