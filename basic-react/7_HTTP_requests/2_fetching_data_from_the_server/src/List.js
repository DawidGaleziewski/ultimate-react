import React from 'react';

// Due to fact server returns the records with id it is good idea to use id in our key
const List = ({ records }) => {
  return (
    <ul>
      {records.map(({ id, recordName, artistName, description }) => {
        return (
          <li className="single-record" key={id.toString()}>
            <h3>{recordName}</h3>
            <span>{artistName}</span>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
