class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!
  def index
    messages = Message.all.order(:created_at)
    render json: messages
  end

  def create
    message = Message.create!(message_params)
    if message
      render json: message
    else
      render json: message.errors
    end
  end

  private

  def message_params
    params.permit(:receiver_id, :content).merge(:sender_id => current_user.id)
  end
end
