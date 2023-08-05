class RegistrationController < ApplicationController

    def new
        @user = User.new
    end
    

    def create
        @user = User.new(user_params)

        if @user.save
            @profile = Profile.create(user: @user, bio: params[:bio], avatar: params[:avatar], interested_topics: params[:interested_topics])
            token = @user.generate_token
            render json: {profile: @profile, token: token }, status: :created
        else 
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end

    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
