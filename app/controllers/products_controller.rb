class ProductsController < ApplicationController

  def index
    @products = Product.all
# respond_to do |format|
#   format.html
#   format.json {render json: @products}
#   end
#     render json: @products
render json: @products
# respond_with(@products)
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

  def destroy
    @product = Product.find(params[:id])
    @product.update(deleted: true)
  end

  def update
    @product_destroy = Product.find(params[:id])
    @product = Product.new(update_params(params[:id]))

    if @product.save && @product_destroy.update(deleted: true)
   render json: @product
    else

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
