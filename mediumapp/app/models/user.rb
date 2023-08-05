class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    has_one :profile
    has_secure_password

    has_many :articles

    has_many :follower_relationships, class_name: 'Follower', foreign_key: 'follower_id'
    has_many :following_relationships, class_name: 'Follower', foreign_key: 'following_id'

    has_many :followers, through: :following_relationships, source: :follower_user
    has_many :following, through: :follower_relationships, source: :following_user



    def generate_token
        payload = { user_id: id, exp: 24.hours.from_now.to_i }
        JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def self.decode_token(token)
        JWT.decode(token, Rails.application.secrets.secret_key_base).first
    rescue JWT::ExpiredSignature, JWT::DecodeError
        nil
    end

    def follow(other_user)
      following << other_user
    end
  
    def unfollow(other_user)
      following.delete(other_user)
    end
  
    def following?(other_user)
      following.include?(other_user)
    end
  
end
