require 'test_helper'

class Api::V1::AlbumsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_albums_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_albums_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_albums_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_albums_destroy_url
    assert_response :success
  end

end
