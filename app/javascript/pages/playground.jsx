import React, { useEffect, useState } from "react";

function renderAlbum(album) {
  const { title } = album;
  return <li>{title}</li>;
}
const albumsApiEndpoint = "/api/v1/albums";

const PlaygroundPage = ({ history }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(albumsApiEndpoint)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
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
        return renderAlbum(album);
      })}
    </div>
  );
};
export default PlaygroundPage;
