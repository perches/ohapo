class ChangeNotNulToTables < ActiveRecord::Migration[6.0]
  def up
    # Not Null制約を有効
    change_column_null :users, :name, false
    change_column_null :users, :enable_flag, false
    change_column_null :user_profiles, :user_id, false
    change_column_null :user_news_categories, :user_id, false
    change_column_null :user_news_categories, :category, false
  end
  def down
    # Not Null制約を無効
    change_column_null :users, :name, true
    change_column_null :users, :enable_flag, true
    change_column_null :user_profiles, :user_id, true
    change_column_null :user_news_categories, :user_id, true
    change_column_null :user_news_categories, :category, true
  end
end