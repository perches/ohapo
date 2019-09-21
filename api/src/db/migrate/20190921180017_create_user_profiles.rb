# frozen_string_literal: true

class CreateUserProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_profiles do |t|
      t.references :user, foreign_key: true, null: false
      t.integer :age
      t.integer :gender, comment: "1:Male, 2:Female, 3:Others"
      t.string :location
      t.string :zip_code
      t.timestamps
    end
  end
end
