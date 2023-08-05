class AddMinutesToReadToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :minutes_to_read, :integer
  end
end
