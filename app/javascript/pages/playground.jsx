import React, { useEffect, useState } from "react";

const PlaygroundPage = ({ data }) => {
  // console.log("data", data);
  const { albums, songs } = data;

  const [albumTitle, setAlbumTitle] = useState("enter a title");
  const [albumTracks, setAlbumTracks] = useState(0);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setAlbumTitle(value);
  };
  const handleTracksChange = (e) => {
    const { value } = e.target;
    setAlbumTracks(value);
  };

  console.log(albumTitle);

  const handleFormSubmit = () => {
    const formData = {
      title: albumTitle,
      tracks: albumTracks,
    };

    console.log("formData", formData);

    fetch("/api/v1/albums/create", {
      method: "POST",
      params: {
        title: albumTitle,
      },
      headers: {
        "Content-Type": "application/json",
      }
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response);
            window.location.reload();
            return response;
          } else {
            console.log("Somthing happened wrong");
          }
        })
        .catch((err) => err),
    });
  };
  return (
    <div>
      <h1>Playground</h1>
      <table>
        <tr>
          <td>
            <h1>Add and Album</h1>
            <form
              id="add-album"
              method="POST"
              action="/api/v1/playground"
              onSubmit={handleFormSubmit}
            >
              <label htmlFor="album-title">Album Title:</label>
              <input
                type="text"
                id="album-title"
                onChange={handleTitleChange}
                value={albumTitle}
              />

              <label htmlFor="album-tracks">Album Lenght:</label>
              <input
                type="number"
                id="album-tracks"
                onChange={handleTracksChange}
                value={albumTracks}
              />

              <button type="submit">SUBMIT</button>
            </form>
          </td>

          <td>
            <h2>All Albums</h2>
            {albums.map((album) => {
              // console.log("album", album);
              return (
                <li key={album.id}>
                  {album.title} - Album ID = {album.id}
                </li>
              );
            })}

            <h2>All Songs</h2>
            {songs.map((song) => {
              // console.log("song", song);
              return (
                <li key={song.id}>
                  {song.title} - Album Id = {song.album_id}
                </li>
              );
            })}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default PlaygroundPage;
