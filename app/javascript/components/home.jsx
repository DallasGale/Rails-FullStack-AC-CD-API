import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <h1>AC/DC API</h1>

      <Link to="/docs" role="button">
        Read the documentation
      </Link>
    </>
  );
};
