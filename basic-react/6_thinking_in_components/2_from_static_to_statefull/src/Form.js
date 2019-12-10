import React, { useState } from 'react';

const initialEntryState = {
  recordName: '',
  artistName: '',
  description: ''
};

const Form = ({ onSubmit }) => {
  //! 3 second state for controlled form
  const [entry, setEntry] = useState(initialEntryState);
  const onChangeHandler = e => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    });
  };

  // ! 4 prevent default behaviour of form onSubmit
  const onSubmitHandler = e => {
    e.preventDefault();
    // Validation for empty value
    if (!entry.recordName || !entry.artistName) {
      return;
    }

    //! 5 send Data back to Container.
    //! spread the value as we do want to clone the values. We dont want to modify the state outisde of Form function.
    onSubmit({ ...entry });

    // Reset the form fields
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
