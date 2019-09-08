Rails.application.routes.draw do
  get 'healthcheck', to: 'samples#healthcheck'
end
