class PicturesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :index, :edit, :update, :destroy]
    # GET /pictures
    # GET /pictures.json
    def index
      @pictures = Picture.all

    end

    def new
      if user_signed_in?
        @picture = Picture.new
      else
        flash[:notice] = "You need to be signed in "
        redirect_to new_user_session_path
      end
    end

    # GET /pictures/1
    # GET /pictures/1.json
    def show
      @picture = Picture.find(params[:id])
    end

    # POST /pictures
    # POST /pictures.json
    def create
      @picture_new = Picture.new(picture_params)
      @picture_new.save

      redirect_to pictures_path
    end

    # PATCH/PUT /pictures/1
    # PATCH/PUT /pictures/1.json
    def update
      if @picture.update(picture_params)
        render :show, status: :ok, location: @picture
      else
        render json: @picture.errors, status: :unprocessable_entity
      end
    end

    # DELETE /pictures/1
    # DELETE /pictures/1.json
    def destroy
      @picture = Picture.find(params[:id])
      @picture.destroy

      redirect_to pictures_path
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_picture
        @picture = Picture.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def picture_params
        params.require(:picture).permit(:image_name, :photo, :image_description, :id)
      end

      
end
