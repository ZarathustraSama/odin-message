class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.string :nickname
      t.date :birthday
      t.text :bio
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
