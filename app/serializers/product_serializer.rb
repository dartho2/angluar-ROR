class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :updated_at
end
