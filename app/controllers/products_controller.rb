class ProductsController < ApplicationController
  def index
    @products = []
    products = Product.where(deleted: false)
    products.each do |product|
      @products.push(product) unless Product.where(parent_id: product.id).any?

      render json: @products
    end
  end
  def show
    @product = Product.find(params[:id])
    render json: @product
  end
end
