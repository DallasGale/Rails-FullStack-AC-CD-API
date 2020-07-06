import React, { useEffect, useState } from "react";

function renderAlbum(album) {
  const { title, id } = album;
  return <li key={id}>{title}</li>;
}
const albumsApiEndpoint = "/api/v1/albums";

const PlaygroundPage = ({ history }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(albumsApiEndpoint)
      .then((res) => {
        console.log("fetch", res);
        if (res.ok) {
          return res.json();
        } else {
          console.log("fetch", res);
          throw new Error("Network response was not ok!");
        }
      })
      .then((res) => setAlbums(res.data))
      .catch(() => history.push("/"));
  }, [albumsApiEndpoint]);

  return (
    <div>
      <h1>Playground</h1>

      <h2>All Albums</h2>
      {albums.map((album) => {
        console.log("album", album);
        return <li key={album.id}>{album.title}</li>;
      })}
    </div>
  );
};
export default PlaygroundPage;
