# frozen_string_literal: true

class UserNewsCategory < ApplicationRecord
  enum category:{
    business: 1,
    entertainment: 2,
    health: 3,
    science: 4,
    sports: 5,
    technology: 6
  }
end
