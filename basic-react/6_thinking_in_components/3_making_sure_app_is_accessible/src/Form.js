import React, { useState } from 'react';

const initialEntryState = {
  recordName: '',
  artistName: '',
  description: ''
};

const Form = ({ onSubmit }) => {
  const [entry, setEntry] = useState(initialEntryState);
  const onChangeHandler = e => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!entry.recordName || !entry.artistName) {
      return;
    }

    onSubmit({ ...entry });

    setEntry(initialEntryState);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="recordName">Record Name</label>
      <input
        id="recordName"
        type="text"
        name="recordName"
        onChange={onChangeHandler}
        value={entry.recordName}
      />
      <label htmlFor="artistName">Artist name</label>
      <input
        id="artistName"
        name="artistName"
        type="text"
        onChange={onChangeHandler}
        value={entry.artistName}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        onChange={onChangeHandler}
        value={entry.description}
      ></textarea>

      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
