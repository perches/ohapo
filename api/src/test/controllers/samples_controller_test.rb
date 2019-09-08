require 'test_helper'

class SamplesControllerTest < ActionDispatch::IntegrationTest
  test "should get healthcheck" do
    get samples_healthcheck_url
    assert_response :success
  end

end
