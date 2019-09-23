# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  # TODO: Production用にURLを置き換える
  provider :twitter, ENV.fetch("TWITTER_KEY"), ENV.fetch("TWITTER_SECRET"), callback_url: "http://127.0.0.1/user/twitter/callback"
end
