import React, { Fragment, useState, useEffect, useRef } from 'react';
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

  // When fetching data we need to remember about this potential scenario:

  // Asyn code can fire in cases when the component was unmounted

  // i.e we click button to fetch the movie showings but navigate to another portion of the app. Setting a state on unmounted component will show error on concole and is a sign of memory leak. As we are trying to work with objects in memory that should be garbage collected

  // We can fix this issue by setting a isMounted variable and set state only if the component is currently mounted. As we want a variable that will be available to all renders we need useRef hook
  const isMounted = useRef(true);

  useEffect(() => {
    axios.get('/api/records').then(({ data }) => {
      // We only set the
      if (isMounted.current) {
        setRecords(sortRecords(data));
      }
    });
    // clean up function. It will return on component dismount. Due to value beeing wrapped in useRef hook the value will not reset between renders
    return () => {
      isMounted.current = false;
    };
  }, []);

  const onSubmitHandler = entry => {
    axios.post('/api/records', entry).then(({ data }) => {
      console.log(data);
      if (isMounted.current) {
        setRecords(sortRecords([...records, data]));
      }
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
