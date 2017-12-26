class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :product do |t|
      t.references :category
      t.string :name
      t.integer :price
      t.integer :parent_id

      t.timestamps
    end
  end
end
