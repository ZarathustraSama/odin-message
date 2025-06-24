class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!
  def index
    messages = Message.where(sender: current_user).or(Message.where(recipient: current_user)).order(:created_at)
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
    recipient = User.find_by(id: params[:recipient])
    params.require(:message).permit(:content).merge(:sender => current_user, :recipient => recipient)
  end
end
