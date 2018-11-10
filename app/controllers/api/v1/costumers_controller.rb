class Api::V1::CostumersController < ApplicationController
  def index
    render json: Costumer.all
  end
end
