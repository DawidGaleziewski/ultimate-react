import React from 'react';

const Form = () => (
  <form>
    <label htmlFor="recordName">Record Name</label>
    <input id="recordName" type="text" name="recordName" />
    <label htmlFor="artistName">Artist name</label>
    <input id="artistName" name="artistName" type="text" />
    <label htmlFor="description">Description</label>
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="10"
    ></textarea>

    <button type="submit">Add</button>
  </form>
);

export default Form;
