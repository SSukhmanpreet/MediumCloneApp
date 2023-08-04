class UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    
        if @user.save
          # Create a new profile for the user
          @user.create_profile(bio: 'Hello, I am a new user!')
    
          token = @user.generate_token
          render json: { token: token }, status: :created
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end
end
