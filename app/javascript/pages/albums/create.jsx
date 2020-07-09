import React, { useEffect, useState } from "react";
import Card from "../../components/ui/card";

const AlbumsCreate = ({ data }) => {
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

  const handleFormSubmit = () => {
    fetch("/api/v1/albums/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            console.log("response");
            return response;
          } else {
            console.log("Somthing happened wrong");
          }
        })
        .catch((err) => err),
    });
  };

  const handleDeletion = (e) => {
    fetch(`/api/v1/albums/destroy/${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location = "";
  };

  const handleUpdate = () => {
    fetch(`/api/v1/albums/destroy/${e}`, {
      method: "PATH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location = "";
  };
  return (
    <div>
      <h1>Playground</h1>
      <h1>Add and Album</h1>
      <form
        id="add-album"
        method="POST"
        onSubmit={handleFormSubmit}
        className="form"
      >
        <div>
          <label htmlFor="album-title">
            Album Title:
            <br />
            <input
              type="text"
              id="album-title"
              name="title"
              onChange={handleTitleChange}
              value={albumTitle}
            />
          </label>
        </div>

        <div>
          <label htmlFor="album-tracks">
            Album Length:
            <br />
            <input
              name="tracks"
              type="number"
              id="album-tracks"
              onChange={handleTracksChange}
              value={albumTracks}
            />
          </label>
        </div>

        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>

      <table
        width="100%"
        border="1"
        cellPadding="7"
        cellSpacing="0"
        className="table"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>LENGTH</th>
            <th>VERSION</th>
            <th>RELEASE DATE</th>
            <th>IS STUDIO RECORDING?</th>
            <th>IS LIVE RECORDING?</th>
            <th>IS COMPILATION?</th>
            <th>SONGS</th>
            <th>TRACK COUNT</th>
            <th>FRONT COVER</th>
            <th>BACK COVER</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>

        <tbody>
          {albums.map((album) => {
            console.log("album", album);
            const {
              id,
              title,
              length,
              version,
              release_date,
              is_studio_recording,
              is_live_recording,
              is_compilation,
              front_cover_image,
              back_cover_image,
              songs,
              tracks,
              handleEdit,
              handleDelete,
            } = album;
            return (
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{length}</td>
                <td>{version}</td>
                <td>{release_date}</td>
                <td>{is_studio_recording}</td>
                <td>{is_live_recording}</td>
                <td>{is_compilation}</td>
                <td>{songs}</td>
                <td>{tracks}</td>
                <td>
                  <img src={`${front_cover_image}`} />
                </td>
                <td>
                  <img src={`${back_cover_image}`} />
                </td>
                <td>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeletion(id)}>delete</button>
                </td>
              </tr>
            );
          })}
          {/*
            <h2>All Songs</h2>
            {songs.map((song) => {
              // console.log("song", song);
              return (
                <li key={song.id}>
                  {song.title} - Album Id = {song.album_id}
                </li>
              );
            })} */}
        </tbody>
      </table>
    </div>
  );
};
export default AlbumsCreate;
