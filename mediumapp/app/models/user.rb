class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    has_one :profile
    has_secure_password

    has_many :articles, foreign_key: :author_id

    def generate_token
        payload = { user_id: id, exp: 24.hours.from_now.to_i }
        JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def self.decode_token(token)
        JWT.decode(token, Rails.application.secrets.secret_key_base).first
    rescue JWT::ExpiredSignature, JWT::DecodeError
        nil
    end

    def follow(user)
        followees << user
    end

    def unfollow(user)
        followees.delete(user)
    end

    def following?(user)
        followees.include?(user)
    end
end
