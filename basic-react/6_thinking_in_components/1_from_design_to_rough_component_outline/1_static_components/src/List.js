import React from 'react';

const records = [
  {
    recordName: 'React Rave1',
    artistName: 'The Developers',
    description: 'trolololol lorem hipsterum'
  },
  {
    recordName: 'React Rave2',
    artistName: 'The Developers',
    description: 'trolololol lorem hipsterum'
  },
  {
    recordName: 'React Rave3',
    artistName: 'The Developers',
    description: 'trolololol lorem hipsterum'
  }
];

const List = () => {
  return (
    <ul>
      {/* As we need all 3 properties best to use destructure */}
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
