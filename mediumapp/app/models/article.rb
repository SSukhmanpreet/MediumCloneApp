class Article < ApplicationRecord
    has_one_attached :file
    belongs_to :author, class_name: 'User'
    has_many :likes
    has_many :comments
end
