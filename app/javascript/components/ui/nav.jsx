import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="nav">
      <Link to="/">AC/DC API</Link>
      <Link to="/docs" role="button">
        Documentation
      </Link>
      {/* <Link to="/admin" role="button">
        Admin
        <Link to="/albums" role="button">
          Add an Album
        </Link>
        <Link to="/albums" role="button">
          Lit all Albums
          <Link to="/albums" role="button">
            Edit an Album
          </Link>
        </Link>
      </Link> */}
      {/* <Link to="/api/v1/playground" role="button">
        Playground
      </Link> */}

      <Link to="/albums" role="button">
        Show Albums
      </Link>
    </nav>
  );
};
