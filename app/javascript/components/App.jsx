import React, { useEffect, useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

// UI
import Header from "../components/ui/header";
import Home from "./home";
import Nav from "../components/ui/nav";
// Pages
import AlbumsPage from "../pages/albums";
import DocsPage from "../pages/docs";
import PlaygroundPage from "../pages/playground";
import CreateAlbum from "../pages/albums/create";
import EditAlbum from "../pages/albums/edit";

const albumsEndpoint = "/api/v1/albums";
const songsEndpoint = "/api/v1/songs";

const App = (props) => {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // fetch(albumsEndpoint)
    //   .then((res) => {
    //     // console.log("fetch", res);
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       // console.log("fetch", res);
    //       throw new Error("Network response was not ok!");
    //     }
    //   })
    //   .then((res) => setAlbums(res.data));

    fetch(songsEndpoint)
      .then((res) => {
        // console.log("fetch", res);
        if (res.ok) {
          return res.json();
        } else {
          // console.log("fetch", res);
          throw new Error("Network response was not ok!");
        }
      })
      .then((res) => setSongs(res.data));
  }, [albumsEndpoint, songsEndpoint]);

  // Use a context to save this request

  return (
    <Router>
      <Header navigation={<Nav />} />
      <main>
        <aside>Side Bar</aside>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={DocsPage} />
          <Route
            path="/albums"
            exact
            render={() => <AlbumsPage data={{ albums }} />}
          />

          <Route
            path="/api/v1/albums/create"
            exact
            render={() => <CreateAlbum data={{ albums, songs }} />}
          />
          <Route
            path="/api/v1/albums/:id/edit"
            children={<EditAlbum data={{ albums }} />}
          />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
