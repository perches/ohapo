# frozen_string_literal: true

class SamplesController < ApplicationController
  before_action :authorize_request, except: :healthcheck
  def healthcheck
    json = { result: "ok" }
    render json: json
  end


  def healthcheckWithAuth
    json = { result: "ok auth" }
    render json: json
  end
end
