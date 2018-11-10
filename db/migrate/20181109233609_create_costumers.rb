class CreateCostumers < ActiveRecord::Migration[5.1]
  def change
    create_table :costumers do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :message, null: false

      t.timestamps null: false
    end
  end
end
