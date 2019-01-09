class Api::V1::PicturesController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy]

  def index
    render json: Picture.all
  end
  def show
    picture = Picture.find(params[:id])
    render json: {picture: image_name, picture: photo, picture: image_description}
  end

  def create
    @picture = Picture.new(picture_params)
    @picture.save
  end

  def destroy
    picture = Picture.find(picture_params)
    picture.destroy
  end

  protected
    # Never trust parameters from the scary internet, only allow the white list through.
    def picture_params
      params.require(:picture).permit(:image_name, :photo, :image_description, :id)
    end
end
