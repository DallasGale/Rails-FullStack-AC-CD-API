class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :length
      t.string :version #single - album ?
      t.integer :album_id
      
      t.timestamps
    end
  end
end
