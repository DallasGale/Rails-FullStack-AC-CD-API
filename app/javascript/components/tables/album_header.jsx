import React from "react";

const AlbumTableHeader = ({ filterTable }) => {
  return (
    <thead>
      <tr>
        <th>
          <button onClick={() => filterTable("id")}>ID</button>
        </th>
        <th>
          <button onClick={() => filterTable("title")}>TITLE</button>
        </th>
        <th>
          <button onClick={() => filterTable("length")}>LENGTH</button>
        </th>
        <th>
          <button onClick={() => filterTable("version")}>VERSION</button>
        </th>
        <th>
          <button onClick={() => filterTable("releaseDate")}>
            RELEASE DATE
          </button>
        </th>
        <th>
          <button onClick={() => filterTable("isStudioRecording")}>
            IS STUDIO RECORDING?
          </button>
        </th>
        <th>
          <button onClick={() => filterTable("isLiveRecording")}>
            IS LIVE RECORDING?
          </button>
        </th>
        <th>
          <button onClick={() => filterTable("isCompilation")}>
            IS COMPILATION?
          </button>
        </th>
        <th>SONGS</th>
        <th>
          <button onClick={() => filterTable("tracks")}>TRACKS</button>
        </th>
        <th>FRONT COVER</th>
        <th>BACK COVER</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
};

export default AlbumTableHeader;
