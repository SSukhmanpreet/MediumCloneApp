class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :topic
      t.text :description
      t.string :author

      t.timestamps
    end
  end
end
