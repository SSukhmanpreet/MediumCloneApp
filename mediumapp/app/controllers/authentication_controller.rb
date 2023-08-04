class AuthenticationController < ApplicationController
    def new
        render :login
    end

    # POST /login
    def create
        user = User.find_by(email: params[:email])

        if user&.authenticate(params[:password])
        # Optionally, you can generate a JWT token for the user here
        # token = your_jwt_generation_method(user)
        # render json: { token: token }, status: :ok
            # Rails.logger.debug("Debug", user)
            if user.profile.present?
                redirect_to profile_path(user.profile), notice: 'User successfully logged in.'
            else 
                render html: 'Welcome! You do not have a profile yet.'
                # redirect_to root_path # Or any other path you want to redirect to
            end
        else
            # flash.now[:alert] = 'Invalid email or password.'
            # render :login # Render the login form view
            render html: "User not registered"  
        end
    end
end
