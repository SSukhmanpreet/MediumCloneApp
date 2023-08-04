class ProfilesController < ApplicationController
    before_action :authenticate_user!

    def show
        @user = User.find(params[:id])
        @profile = @user.profile
        @articles = @user.articles
        render json: @user.profile
    end

    def follow
        @user = User.find(params[:id])
        current_user.follow(@user)
        redirect_to @user.profile, notice: 'You are now following this author.'
    end

    def unfollow
        @user = User.find(params[:id])
        current_user.unfollow(@user)
        redirect_to @user.profile, notice: 'You have unfollowed this author.'
    end
end
