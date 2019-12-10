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

  // There is a catch when using await/async with useEffect
  // useEffect is expected only to return a null or a function
  useEffect(() => {
    // We can work around this by putting only axios method inside the new async function
    // ! due to fact we declared this function inside the useEffect hook we do not need to declare it in dependencies array
    const fetchData = async () => {
      const { data } = await axios.get('/api/records');
      if (isMounted.current) {
        setRecords(sortRecords(data));
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  // as this is not inside a useEffect hook we can simply use async on it without extra workaround
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
