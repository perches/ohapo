# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'user', controllers: {
    omniauth_callbacks: "auth/omniauth_callbacks",
    # registrations: 'user/registrations'
  }
  get "healthcheck", to: "samples#healthcheck"

  root 'home#about'
end