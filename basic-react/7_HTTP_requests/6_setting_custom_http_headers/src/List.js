import React from 'react';

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
