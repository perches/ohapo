# frozen_string_literal: true

class SamplesController < ApplicationController
  def healthcheck
    json = { result: "ok" }
    render json: json
  end
end
