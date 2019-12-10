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

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      // We can see headers in network tab for our request
      // We can override the headers in many ways. I.E to cache the request
      const { data } = await axios.get('/api/records', {
        // Last param in axios allows us to modify the response headers
        headers: {
          'Cache-Control': 'private',
          'X-Custom-Header': 'some-value'
        }
      });
      if (isMounted.current) {
        setRecords(sortRecords(data));
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onSubmitHandler = async entry => {
    const { data } = await axios.post('/api/records', entry);
    console.log(data);
    if (isMounted.current) {
      setRecords(sortRecords([...records, data]));
    }
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
