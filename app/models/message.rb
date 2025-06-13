class Message < ApplicationRecord
  validates :sender, :class_name => 'User', presence: true
  validates :recipient, :class_name => 'User', presence: true
  validates :content, presence: true

  belongs_to :sender, :class_name => 'User'
  belongs_to :recipient, :class_name => 'User'
end
