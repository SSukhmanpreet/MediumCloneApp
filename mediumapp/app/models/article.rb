class Article < ApplicationRecord
    has_one_attached :file
    belongs_to :user
    # has_many :likes
    # has_many :comments

    has_many :article_revisions, dependent: :destroy

    scope :draft, -> {where(published_at: nil)}
    scope :published, -> {where("published_at <= ?", Time.current)}

end
