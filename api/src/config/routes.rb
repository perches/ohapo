# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get "healthcheck", to: "samples#healthcheck"

  # mount_devise_token_auth_for 'User', at: 'auth', controllers: {
  #   registrations: 'auth/registrations'
  # }
  root 'home#about'
end

