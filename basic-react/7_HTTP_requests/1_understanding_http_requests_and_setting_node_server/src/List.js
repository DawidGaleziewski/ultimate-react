import React from 'react';

const List = ({ records }) => {
  return (
    <ul>
      {records.map(({ recordName, artistName, description }) => {
        return (
          <li className="single-record" key={recordName}>
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
