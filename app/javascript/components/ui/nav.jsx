import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav class="nav">
      <Link to="/docs" role="button">
        Read the documentation
      </Link>
      <Link to="/api/v1/playground" role="button">
        Playground
      </Link>
      <Link to="/api/v1/albums/create" role="button">
        Create an Album
      </Link>
    </nav>
  );
};
