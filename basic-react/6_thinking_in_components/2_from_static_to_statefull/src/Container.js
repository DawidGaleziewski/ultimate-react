import React, { Fragment, useState } from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';
import Form from './Form';

// ! 8. We can remove the dummy data
// const recordsData = [
//   {
//     recordName: 'React Rave1',
//     artistName: 'The Developers',
//     description: 'trolololol lorem hipsterum'
//   },
//   {
//     recordName: 'React Rave2',
//     artistName: 'The Developers',
//     description: 'trolololol lorem hipsterum'
//   },
//   {
//     recordName: 'React Rave3',
//     artistName: 'The Developers',
//     description: 'trolololol lorem hipsterum'
//   }
// ];

const Container = () => {
  //! 1. create new state for records
  //! 9. We can initiate the state with empty array now
  const [records, setRecords] = useState([]);
  //! 6 we want to spread the old records, to avoid mod of the state, and add new entry to it
  const onSubmitHandler = entry => {
    //! 10. Sort array - this is a good monent to sort the newly created array of elements
    setRecords(
      [...records, entry].sort((a, b) => {
        if (a.recordName < b.recordName) {
          return -1;
        }

        if (a.recordName < b.recordName) {
          return 1;
        }

        return 0;
      })
    );
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText="Add a new favourite">
          {/* ! 7 Pass handler to child so that it can modify the Container state */}
          <Form onSubmit={onSubmitHandler} />
        </Section>
        <Section headingText="Records">
          {/* This is also advantage of using children prop, we can pass the props on Container level and not List level making it easier to work with, and avoiding component drilling with Container -> Section -> List*/}
          //! 2 Passing state as props to list
          <List records={records} />
        </Section>
      </main>
    </Fragment>
  );
};
export default Container;
