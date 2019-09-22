# frozen_string_literal: true

class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
    # protect_from_forgery
end
