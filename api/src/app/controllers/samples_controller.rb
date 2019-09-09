class SamplesController < ApplicationController
  def healthcheck
    json = {result: 'ok'}
    render :json => json
  end
end
