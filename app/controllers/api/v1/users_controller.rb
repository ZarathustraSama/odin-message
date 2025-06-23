class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    users = User.where.not(id: current_user.id).order(username: :asc)
    render json: users
  end

  def show
    render json: current_user
  end
end
