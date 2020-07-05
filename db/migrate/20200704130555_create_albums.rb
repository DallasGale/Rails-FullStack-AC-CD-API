class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|

      t.string :title, null: false
      t.string :version, null: false
      t.string :release_date, null: false
      t.integer :tracks, null: false
      t.boolean :is_studio_recording, null: false
      t.boolean :is_live_recording, null: false
      t.boolean :is_compilation, null: false
      t.string  :front_cover_image, default: 'https://via.placeholder.com/410x410'
      t.string  :back_cover_image, default: 'https://via.placeholder.com/420x420'

      t.timestamps
    end
  end
end
