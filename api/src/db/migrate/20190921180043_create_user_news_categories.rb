# frozen_string_literal: true

class CreateUserNewsCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :user_news_categories do |t|
      t.references :user, foreign_key: true, null: false
      t.string :category, null: false
      t.timestamps
    end
  end
end
