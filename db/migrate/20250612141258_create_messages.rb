class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.text :content
      t.references :sender, null: false
      t.references :recipient, null: false

      t.timestamps
    end
    add_foreign_key :messages, :users, column: :sender_id, primary_key: :id
    add_foreign_key :messages, :users, column: :recipient_id, primary_key: :id
  end
end
