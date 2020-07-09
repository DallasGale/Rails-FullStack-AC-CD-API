class Api::V1::SongsController < ApplicationController
  def index

    
    song = Song.all
    # album = Song.album
    render json: { status: 'SUCCESS', message: 'Loaded songs', data: song}, status: :ok
  
  end
  def create
    song = Song.create!(song_params)
    if song
      render json: song
    else 
      render json: song.errors
    end
  end

  def show
    if song
      render json: song
    else 
      render json: song.errors
    end
  end

  def destroy
    song&.destroy
    render json: { message: 'Song deleted!'}
  end

  private
  def song_params
    params.permit(:title, :version, :release_date, :tracks, :is_studio_recording, :is_live_recording, :is_compilation, :front_cover_image, :back_cover_image)
  end

  def song 
    @song ||= Song.find(params[:id])
  end
end
