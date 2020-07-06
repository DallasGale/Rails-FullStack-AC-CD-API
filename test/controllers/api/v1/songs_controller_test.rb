require 'test_helper'

class Api::V1::SongsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_songs_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_songs_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_songs_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_songs_destroy_url
    assert_response :success
  end

end
