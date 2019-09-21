class CreateUserNewsCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :user_news_categories do |t|
      t.references :user, foreign_key: true
      t.string :category

      t.timestamps
    end
  end
end
