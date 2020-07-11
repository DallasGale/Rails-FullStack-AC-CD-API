import React, { useEffect, useState } from "react";
import AlbumTableHeader from "../../components/tables/album_header";
import AlbumRow from "../../components/tables/album_row";

const albumsEndpoint = "/api/v1/albums";

const AlbumsPage = () => {
  // console.log("data", data);
  // const { albums, songs } = data;

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

  const [albumOrder, setAlbumOrder] = useState([]);
  console.log(albumOrder);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchAlbums() {
      setIsLoading(true);
      let albums = await fetch(albumsEndpoint);
      albums = await albums.json();
      setIsLoading(false);
      setAlbumOrder(albums.data);
    }
    fetchAlbums();
  }, []);

  function sortByIdAsc(arr) {
    return arr.concat().sort((a, b) => a.id - b.id);
  }
  function sortByTrackCountAsc(arr) {
    return arr.concat().sort((a, b) => a.tracks - b.tracks);
  }
  function sortByTitleAsc(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }
  function sortByVersionAsc(a, b) {
    if (a.version < b.version) return -1;
    if (a.version > b.version) return 1;
    return 0;
  }

  const filterTable = (name) => {
    if (name === "id") {
      const a = sortByIdAsc(albumOrder);
      setAlbumOrder([...a]);
    } else if (name === "title") {
      const a = albumOrder.sort(sortByTitleAsc);
      setAlbumOrder([...a]);
    } else if (name === "version") {
      const a = albumOrder.sort(sortByVersionAsc);
      setAlbumOrder([...a]);
    } else if (name === "tracks") {
      const a = sortByTrackCountAsc(albumOrder);
      setAlbumOrder([...a]);
    } else setAlbumOrde(albumOrder);
  };

  return (
    <div>
      <h1>Albums</h1>
      {!isLoading ? (
        <table width="100%" className="table" cellPadding="0" cellSpacing="0">
          <AlbumTableHeader filterTable={filterTable} />

          <tbody>
            {albumOrder.map((album) => {
              return <AlbumRow key={album.id} id={album.id} {...album} />;
            })}
          </tbody>
        </table>
      ) : (
        <h2>Loading albums...</h2>
      )}
    </div>
  );
};
export default AlbumsPage;
