class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :image_name
      t.string :image_description
      t.string :image

      t.timestamps
    end
  end
end
