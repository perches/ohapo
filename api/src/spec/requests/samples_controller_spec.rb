# frozen_string_literal: true

require "rails_helper"

RSpec.describe SamplesController, type: :request do
  describe "GET /healthcheck" do
    before do
      # 共通処理を記述
      get "/healthcheck"
    end

    context "should return response" do
      it "that status is 200" do
        expect(response).to have_http_status(200)
      end
    end

    context "should return string" do
      it 'that return is "ok"' do
        json = JSON.parse(response.body)
        expect(json["result"]).to eq("ok")
      end
    end
  end
end
