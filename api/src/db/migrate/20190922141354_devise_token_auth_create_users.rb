# frozen_string_literal: true

class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[6.0]
  def change
    # drop_table :users
    create_table(:users) do |t|
      ## Required
      t.string :provider, default: "email", null: false
      t.string :uid, default: "", null: false

      ## Database authenticatable
      t.string :encrypted_password,  default: "", null: false

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, default: false

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## User Info
      # t.string :name
      t.string :nickname
      t.string :image
      t.string :email

      t.string :name, default: "no name", null: false
      t.boolean :enable_flag, default: true, null: false
      t.timestamps

      ## Tokens
      t.text :tokens
    end

    add_index :users, :email,                unique: true
    add_index :users, [:uid, :provider],     unique: true
    add_index :users, :reset_password_token, unique: true
  end
end
