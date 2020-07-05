class Api::V1::AlbumsController < ApplicationController
  def index
    album = Album.all.order(release_date: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded albums', data: album}, status: :ok
  end

  def create
    album = Album.create!(album_params)
    if album
      render json: album
    else 
      render json: album.errors
    end
  end

  def show
    if album
      render json: album
    else 
      render json: album.errors
    end
  end

  def destroy
    album&.destroy
    render json: { message: 'Album deleted!'}
  end

  private
  def album_params
    params.permit(:title, :version, :release_date, :tracks, :is_studio_recording, :is_live_recording, :is_compilation, :front_cover_image, :back_cover_image)
  end

  def album 
    @album ||= Album.finc(params[:id])
  end
end
