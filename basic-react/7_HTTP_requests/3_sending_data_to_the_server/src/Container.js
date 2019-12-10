import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';
import Form from './Form';
import axios from 'axios';

const sortRecords = records =>
  records.sort((a, b) => {
    if (a.recordName < b.recordName) {
      return -1;
    }

    if (a.recordName < b.recordName) {
      return 1;
    }

    return 0;
  });

const Container = () => {
  const [records, setRecords] = useState([]);
  const [liveText, setLiveText] = useState();

  useEffect(() => {
    axios.get('/api/records').then(({ data }) => {
      setRecords(sortRecords(data));
    });
  }, []);

  const onSubmitHandler = entry => {
    // We will no longer set the new values on directly on state. We will push those to the server via axios
    // setRecords(sortRecords([...records, entry]));
    // setLiveText(`${entry.recordName} successfully added.`);

    // Axios post accepts the url of endpoint and the value we send
    // It also returns a promise
    axios.post('/api/records', entry).then(({ data }) => {
      // We can add the data back to our own state once it was added by the server
      console.log(data);
      setRecords(sortRecords([...records, data]));
    });
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
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  );
};
export default Container;
