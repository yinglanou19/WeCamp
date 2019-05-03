class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null:false
      t.text :description, null:false
      t.integer :host_id, null:false
      t.float :long,null:false
      t.float :lat,null:false
      t.string :address,null:false
      t.integer :daily_price,null:false
      t.integer :max_capacity, null:false
      t.boolean :has_wifi,default:false
      t.boolean :pet_friendly,default:false
      t.boolean :is_camping,default:false
      t.timestamps
    end
      add_index :listings, :host_id
  end

end
