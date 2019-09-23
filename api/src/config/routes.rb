# frozen_string_literal: true

Rails.application.routes.draw do
  get "healthcheck", to: "samples#healthcheck"
  get "categories", to: "categories#index"
end
