import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <Link to="/" role="button">
        AC/DC API
      </Link>
      •
      <Link to="/docs" role="button">
        Read the documentation
      </Link>
      •
      <Link to="/playground" role="button">
        Playground
      </Link>
    </nav>
  );
};
