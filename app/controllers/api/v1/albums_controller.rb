class Api::V1::AlbumsController < ApplicationController

  protect_from_forgery with: :null_session, if: Proc.new {|c| c.request.format.json? }

  def index
    album = Album.all.order(release_date: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded albums', data: album}, status: :ok
  end

  def songs 
    album = Album.joins(:songs).all.order(release_date: :desc)
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

  # def edit 
  #   album = Album.find(params[:id])
  # end

  # def update
  #   album = Album.find(params[:id])
  
  #   if album.update(album_params)
  #     redirect_to album
  #   else
  #     render 'edit'
  #   end
  # end
  


  def destroy
    album&.destroy
    render json: { message: 'Album deleted!'}
  end

  private
  def album_params
    params.permit(:title, :version, :release_date, :tracks, :is_studio_recording, :is_live_recording, :is_compilation, :front_cover_image, :back_cover_image)
  end

  def album 
    @album ||= Album.find(params[:id])
  end
end
