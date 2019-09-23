# frozen_string_literal: true

require "rails_helper"

RSpec.describe CategoriesController, type: :controller do

  describe "GET /categories" do
    before do
      # 共通処理を記述
      get :index
    end

    context "should return response" do
      it "that status is 200" do
        expect(response).to have_http_status(200)
      end
    end

    context "should return JSON" do
      it "that return is Categories" do
        json = JSON.parse(response.body)
        expect(json["categories"][0]["id"]).to eq(1)
        expect(json["categories"][1]["id"]).to eq(2)
        expect(json["categories"][2]["id"]).to eq(3)
        expect(json["categories"][3]["id"]).to eq(4)
        expect(json["categories"][4]["id"]).to eq(5)
        expect(json["categories"][5]["id"]).to eq(6)
        expect(json["categories"][0]["category_name"]).to eq("business")
        expect(json["categories"][1]["category_name"]).to eq("entertainment")
        expect(json["categories"][2]["category_name"]).to eq("health")
        expect(json["categories"][3]["category_name"]).to eq("science")
        expect(json["categories"][4]["category_name"]).to eq("sports")
        expect(json["categories"][5]["category_name"]).to eq("technology")
      end
    end
  end
end
