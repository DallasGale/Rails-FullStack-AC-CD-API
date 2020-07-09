import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditAlbum = ({ data }) => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const [album, setAlbum] = useState();
  const { albums } = data;
  useEffect(() => {
    if (albums.length > 0) {
      const a = albums.filter((album) => album.id.toString() === id);
      setAlbum(a);
    }
  }, [albums]);

  console.log("album", album);

  const [albumVersion, setAlbumVersion] = useState();
  const [albumReleaseDate, setAlbumReleaseDate] = useState();
  useEffect(() => {
    if (album) {
      setAlbumVersion(album[0].version);
      setAlbumReleaseDate(album[0].release_date);
    }
  }, [album]);

  const handleVersionSelect = (e) => {
    const { value } = e.target;
    setAlbumVersion(value);
  };

  const handleReleaseDateSelect = (e) => {
    const { value } = e.target;
    setAlbumReleaseDate(value);
  };

  const albumSongs = [];
  return (
    <div>
      {album && (
        <>
          <h3>
            Edit album ID: {id} - {album[0].title}
          </h3>

          <div style={{ overflow: "scroll", position: "relative" }}>
            <table
              width="100%"
              border="1"
              cellPadding="7"
              cellSpacing="0"
              className="table"
            >
              <thead>
                <tr>
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
                </tr>
              </thead>
              <tr>
                <td>
                  <input type="text" name="title" value={album[0].title} />
                </td>
                <td>
                  <input type="number" name="length" value={album[0].length} />
                </td>
                <td>
                  <select
                    name="version"
                    id="version"
                    value={albumVersion}
                    onChange={handleVersionSelect}
                  >
                    <option value="Australian">Australian</option>
                    <option value="International">International</option>
                    <option value="North American">North American</option>
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    name="release_date"
                    onChange={handleReleaseDateSelect}
                    value={albumReleaseDate}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="is_studio_recording"
                    defaultChecked={album[0].is_studio_recording}
                    value={album[0].is_studio_recording}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="is_live_recording"
                    defaultChecked={album[0].is_live_recording}
                    value={album[0].is_live_recording}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="is_compilation"
                    defaultChecked={album[0].is_compilation}
                    value={album[0].is_compilation}
                  />
                </td>
                <td>
                  {typeof album[0].songs ? album[0].songs : "--"}
                  <small>no edit</small>
                </td>
                <td>
                  {album[0].songs ? album[0].songs.length : 0}
                  <small>no edit</small>
                  <small>no edit</small>
                </td>
                <td>
                  <img src={`${album[0].front_cover_image}`} />
                </td>
                <td>
                  <img src={`${album[0].back_cover_image}`} />
                </td>
                {/* <td>
                      <button onClick={() => handleEdit(id)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDeletion(id)}>delete</button>
                    </td> */}
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default EditAlbum;
