class ProductsController < ApplicationController
  def index
    @products = Product.all
      render json: @products
    end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location:  @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  private
  def product_params
    params.require(:product).permit(:name, :id, :parent_id, :price, :category_id,)
  end

  def update_params parent_id
    params.require(:product).permit(:name, :id, :parent_id, :price, :category_id).merge(parent_id: parent_id)
  end
end
