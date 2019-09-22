# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get "healthcheck", to: "samples#healthcheck"
end
