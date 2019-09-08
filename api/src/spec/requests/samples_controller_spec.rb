require 'rails_helper'

RSpec.describe SamplesController, type: :request do
  describe "GET /healthcheck" do
    before do
      # 共通処理を記述
      get '/healthcheck'
    end

    it "should return response status 200" do
      expect(response).to have_http_status(200)
    end

    it 'should return "ok"' do
      json = JSON.parse(response.body)
      expect(json['result']).to eq('ok')
    end
  end
end
