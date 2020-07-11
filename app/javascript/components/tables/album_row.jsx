import React, { useState } from "react";

const AlbumRow = ({
  id,
  title,
  length,
  release_date,
  is_studio_recording,
  is_live_recording,
  is_compilation,
  songs,
  tracks,
  front_cover_image,
  back_cover_image,
  version,
  handleEdit,
  handleDelete,
}) => {
  const [editToggled, setEditToggled] = useState(false);
  const handleEditRow = () => {
    setEditToggled(true);
  };

  const handleResetRow = () => {
    setEditToggled(false);
  };

  const handleSave = () => {};
  return !editToggled ? (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{length}</td>
      <td>{version}</td>
      <td>{release_date}</td>
      <td>{is_studio_recording}</td>
      <td>{is_live_recording}</td>
      <td>{is_compilation}</td>
      <td>{songs}</td>
      <td>{tracks}</td>
      <td>{front_cover_image}</td>
      <td>{back_cover_image}</td>
      <td>
        <button onClick={() => handleEditRow()}>Edit</button>
      </td>
      <td>
        <button onClick={() => handleDelete(id)}>delete</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>
        <input type="text" name="title" value={title} />
      </td>
      <td>
        <input type="number" name="length" value={length} />
      </td>
      <td>
        <select
          name="version"
          id="version"
          // value={albumVersion}
          // onChange={handleVersionSelect}
        >
          <option value="Australian">Australian</option>
          <option value="International">International</option>
          <option value="North American">North American</option>
        </select>
      </td>
      <td>
        <input
          type="date"
          name="release_date"
          // onChange={handleReleaseDateSelect}
          // value={albumReleaseDate}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="is_studio_recording"
          defaultChecked={is_studio_recording}
          value={is_studio_recording}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="is_live_recording"
          defaultChecked={is_live_recording}
          value={is_live_recording}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="is_compilation"
          defaultChecked={is_compilation}
          value={is_compilation}
        />
      </td>
      <td>
        {typeof songs ? songs : "--"}
        <small>no edit</small>
      </td>
      <td>
        {songs ? songs.length : 0}
        <small>no edit</small>
        <small>no edit</small>
      </td>
      <td>
        <input
          type="front_cover_image"
          name="front_cover_image"
          value={front_cover_image}
        />
      </td>
      <td>
        <input
          type="back_cover_image"
          name="back_cover_image"
          value={back_cover_image}
        />
      </td>
      <td>
        <button onClick={() => handleEdit(id)}>Update</button>
      </td>
      <td>
        <button onClick={() => handleSave(id)}>save</button>
      </td>
    </tr>
  );
};

export default AlbumRow;
