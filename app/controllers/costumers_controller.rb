class CostumersController < ApplicationController
  # GET /costumers
  # GET /costumers.json
  def index
    @costumers = Costumer.all
    render json: @costumers.to_json
  end

  # GET /costumers/1
  # GET /costumers/1.json
  def show
    @costumer = Costumer.find(params[:id])
    render json: @costumer.to_json
  end

  # POST /costumers
  # POST /costumers.json
  def create
    @costumer_new = Costumer.new(costumer_params)
    @costumer_new.save
    @costumer = ContactForm.new(costumer_params)
    @costumer.deliver
  end

  # PATCH/PUT /costumers/1
  # PATCH/PUT /costumers/1.json
  def update
    if @costumer.update(costumer_params)
      render :show, status: :ok, location: @costumer
    else
      render json: @costumer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /costumers/1
  # DELETE /costumers/1.json
  def destroy
    @costumer.destroy
  end

  protected
    # Never trust parameters from the scary internet, only allow the white list through.
    def costumer_params
      params.require(:costumer).permit(:name, :email, :message)
    end
end
