module Api
    module V1
        class SessionsController < ApplicationController
            def create
                detail=login_params[:email].downcase
                @user= User.find_by!(email:login_params[:email].downcase)
                unless @user.authenticate(login_params[:password])
                    respond_with_error("Incorrect credentials. Try again",:unauthorized)
                end
            end

            private
        
            def login_params
                params.require(:login).permit(:email,:password)
            end
        end
        
    end
end

