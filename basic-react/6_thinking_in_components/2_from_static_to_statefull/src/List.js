import React from 'react';

// ! 2. Records are passed via prop from Container
const List = ({ records }) => {
  return (
    <ul>
      {records.map(({ recordName, artistName, description }) => {
        // Remember about unique key prop
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
