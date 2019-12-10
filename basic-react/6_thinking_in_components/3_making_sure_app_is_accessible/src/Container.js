import React, { Fragment, useState } from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';
import Form from './Form';

const Container = () => {
  const [records, setRecords] = useState([]);
  // Adding state for live area
  const [liveText, setLiveText] = useState();

  const onSubmitHandler = entry => {
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
    // This will triger state change, and make screen reader to read the msg
    setLiveText(`${entry.recordName} successfully added.`);
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText="Add a new favourite">
          <Form onSubmit={onSubmitHandler} />
        </Section>
        <Section headingText="Records">
          <List records={records} />
        </Section>
      </main>
      {/* This will wait for screen reader before it finishes doing last thing. aria-atomic will read the whole text once it changes*/}
      {/* We may want to hide this dive. We need to use special css not to remove it from the DOM but make it vanish */}
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  );
};
export default Container;
