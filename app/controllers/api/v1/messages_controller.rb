class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!
  def index
    messages = Message.sender_id(current_user.id).order(created_at:)
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
    params.permit(:sender_id, :receiver_id, :content)
  end
end
