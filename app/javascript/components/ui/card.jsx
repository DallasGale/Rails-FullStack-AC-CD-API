import React from "react";

const Card = ({ id, title, tracks, length, songs }) => {
  return (
    <article className="card">
      <div className="card-cell">
        <h2 className="text card-id">{id}</h2>
      </div>

      <div className="card-cell">
        <h1 className="text">{title}</h1>
      </div>

      <div className="card-cell">
        <h2 className="text">{tracks}</h2>
      </div>

      <div className="card-cell">
        <h2 className="text">{length}</h2>
      </div>
      <div className="card-cell">
        <ul>
          <h2 className="text">
            <span>Songs</span>
          </h2>
          {songs ? (
            songs.map((song) => <li>{song.title}</li>)
          ) : (
            <code>no songs :*(</code>
          )}
        </ul>
      </div>
    </article>
  );
};

export default Card;
