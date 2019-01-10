class Api::V1::CostumersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy, :index]

  def index
    render json: Costumer.all
  end
  def show
    costumer_new = Costumer.find(params[:id])
    render json: @costumer.to_json
  end

  def create
    @costumer_new = Costumer.new(costumer_params)
    @costumer_new.save
    @costumer = ContactForm.new(costumer_params)
    @costumer.deliver
  end

  def destroy
    costumer = Costumer.find(costumer_params)
    costumer.destroy
  end

  protected
    # Never trust parameters from the scary internet, only allow the white list through.
    def costumer_params
      params.require(:costumer).permit(:name, :email, :message)
    end
end
