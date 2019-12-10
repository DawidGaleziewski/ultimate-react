import React, { Fragment } from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';
import Form from './Form';

const Container = () => (
  <Fragment>
    <Header />
    <main>
      <Section headingText="Add a new favourite">
        <Form />
      </Section>
      {/* We use child prop to pas list to the section component */}
      <Section headingText="Records">
        <List />
      </Section>
    </main>
  </Fragment>
);

export default Container;
