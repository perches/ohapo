# frozen_string_literal: true

class CategoriesController < ApplicationController
  def showall
    json = {
      categories:
      [
        {
          id: 1,
          category_name: "business"
        },
        {
          id: 2,
          category_name: "entertainment"
        },
        {
          id: 3,
          category_name: "health"
        },
        {
          id: 4,
          category_name: "science"
        },
        {
          id: 5,
          category_name: "sports"
        },
        {
          id: 6,
          category_name: "technology"
        },
      ]
    }
    render json: json
  end
end
