class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[6.0]
  def change
    drop_table :users
    create_table(:users) do |t|
      ## Required
      t.string :provider, :null => false, :default => "email"
      t.string :uid, :null => false, :default => ""

      ## Database authenticatable
      t.string :encrypted_password, :null => false, :default => ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, :default => false

      ## Rememberable
      t.datetime :remember_created_at

      ## User Info
      # t.string :name
      # t.string :nickname
      t.string :image
      t.string :email

      t.string :name, null: false
      t.boolean :enable_flag, null: false
      t.timestamps
      
      ## Tokens
      t.text :tokens

      # t.timestamps
    end

    add_index :users, :email,                unique: true
    add_index :users, [:uid, :provider],     unique: true
    add_index :users, :reset_password_token, unique: true
  end
end
