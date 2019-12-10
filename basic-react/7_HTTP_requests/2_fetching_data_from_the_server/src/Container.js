import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';
import Form from './Form';
import axios from 'axios';

// As the data is not beeing sorted from fetch request, and we already sort data when added we would have to use same algorithm in two places, so it is better to extrac the code:

// ! this is a good patern to move fonctions that do not use anything from rendered component outside of the component function

// ! normally we should add functions to dependencies array. However this is only for the functions inside the component

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
  // Data is passed to components via records state.
  // We can use this to set its state with fetched data
  // Axios is promise based. Data is fetched async. This allows us to execute fetch without blocking our application. Therefore we should use useEffect hook
  const [records, setRecords] = useState([]);
  const [liveText, setLiveText] = useState();

  // As we want to do this only once, when component is mounted, we pass empty array
  useEffect(() => {
    // axios returns a promise from this url
    //  using relative path is better as we may change domain. Communication layer is able to determine that this path exist on our domain
    // We want to destructure the data from response
    axios.get('/api/records').then(({ data }) => {
      console.log(data);
      // ! CORS
      // We got CORS error. This is a security measure that wont allow browsers to do a get request for server based on diffrent domains.
      // Here the issue is due to fact the browser runs on port 3000 while server runs on port 5000

      // if we remove http://localhost:5000 from the url we get 404 not found

      // We can fix this on the dev environment by using reverse proxy. It will trick browser into beliving the server is on current domain.

      // This feature is already build in any create-react-app

      // Add on top of package.json:
      // "proxy": "http://localhost:5000"
      // This will route any unknown calls from ports 3000 to port 5000

      // Lastly we want to set our state with the fetched data
      setRecords(sortRecords(data));
    });
  }, []);

  const onSubmitHandler = entry => {
    // Refactored same sorting algorithm
    setRecords(sortRecords([...records, entry]));
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
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  );
};
export default Container;
