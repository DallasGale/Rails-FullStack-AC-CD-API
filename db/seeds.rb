# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Album.create([
  {
    title: "High Voltage",
    version: "Australian",
    release_date: "1975-02-17",
    tracks: 8,
    is_studio_recording: true,
    is_live_recording: false,
    is_compilation: false,
    front_cover_image: "https://via.placeholder.com/650x650",
    back_cover_image: "https://via.placeholder.com/650x650",
  },
  {
    title: "T.N.T",
    version: "International",
    release_date: "1975-12-01",
    tracks: 9,
    is_studio_recording: true,
    is_live_recording: false,
    is_compilation: false,
    front_cover_image: "https://via.placeholder.com/650x650",
    back_cover_image: "https://via.placeholder.com/650x650",
  },
  {
    title: "High Voltage",
    version: "International",
    release_date: "1976-05-14",
    tracks: 8,
    is_studio_recording: true,
    is_live_recording: false,
    is_compilation: false,
    front_cover_image: "https://via.placeholder.com/650x650",
    back_cover_image: "https://via.placeholder.com/650x650",
  },
  {
    title: "Dirty Deeds Done Dirt Cheap",
    version: "International",
    release_date: "1976-12-17",
    tracks: 9,
    is_studio_recording: true,
    is_live_recording: false,
    is_compilation: false,
    front_cover_image: "https://via.placeholder.com/650x650",
    back_cover_image: "https://via.placeholder.com/650x650",
  },
  {
    title: "Dirty Deeds Done Dirt Cheap",
    version: "Australian",
    release_date: "1976-12-20",
    tracks: 9,
    is_studio_recording: true,
    is_live_recording: false,
    is_compilation: false,
    front_cover_image: "https://via.placeholder.com/650x650",
    back_cover_image: "https://via.placeholder.com/650x650",
  }
])


Song.create([
  {
    title: "Baby, Please Don't Go",
    length: "00:04:50:000",
  },
  {
    title: "She's Got Balls",
    length: "00:04:52:000",
  },
  {
    title: "Little Lover",
    length: "00:05:40:000",
  },
  {
    title: "Stick Around",
    length: "00:04:39:000",
  },
  {
    title: "Soul Stripper",
    length: "00:06:25:000",
  },
  {
    title: "You Ain't Got a Hold on Me",
    length: "00:03:31:000",
  },
  {
    title: "Love Song",
    length: "00:05:14:000",
  },
  {
    title: "Show Business",
    length: "00:04:46:000",
  }
])