import React, { useState } from 'react';
import Input from './Input';
// We do not have to create atom componets from the get go. It is good practise to create large components, and then refactor it by using atoms
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
      {/* <label htmlFor="recordName">Record Name</label>
      <input
        id="recordName"
        type="text"
        name="recordName"
        onChange={onChangeHandler}
        value={entry.recordName}
      /> */}
      {/* We can now use our component. It will bind all the data. Thanks to spread operator it will put all the attributes in the input tag and we do need to think about those */}
      <Input
        labelText="Record Name"
        name="recordName"
        onChange={onChangeHandler}
        value={entry.recordName}
      />
      {/* <label htmlFor="artistName">Artist name</label>
      <input
        id="artistName"
        name="artistName"
        type="text"
        onChange={onChangeHandler}
        value={entry.artistName}
      /> */}
      <Input
        labelText="Artist name"
        name="artistName"
        type="text"
        onChange={onChangeHandler}
        value={entry.artistName}
      />

      {/* We can convert input component to work like textarea*/}
      {/* we will add new props called type for this */}

      {/* <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        onChange={onChangeHandler}
        value={entry.description}
      ></textarea> */}
      <Input
        type="textarea"
        labelText="description"
        name="description"
        onChange={onChangeHandler}
        value={entry.description}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
