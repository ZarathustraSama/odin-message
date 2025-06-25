class Api::V1::ProfileController < ApplicationController
  def show
    if params[:id]
      render json: @profile
    else
      profile = Profile.find_by(user: current_user)
      render json: profile
    end
  end

  def update
    if params[:id] == current_user.id
    end
  end

  def create
    profile = Profile.create!(profile_params)
    if profile
      render json: profile
    else
      render json: profile.errors
    end
  end

  private

  def profile_params
    params.permit(:nickname, :birthday, :bio).merge(:user => current_user)
  end
end
