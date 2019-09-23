# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    array_categories = []
    array_cate_pair = UserNewsCategory.categories.to_a

    array_cate_pair.each do |pair|
      tempid = pair[1]
      tempname = pair[0]
      temp = {
        id: tempid,
        category_name: tempname
      }
      array_categories << temp
    end
    
    json = {
      categories:
        array_categories
    }
    render json: json
  end
end
