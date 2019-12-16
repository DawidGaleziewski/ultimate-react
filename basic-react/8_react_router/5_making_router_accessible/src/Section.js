import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';

const Section = ({ children, headingText, headingLevel = 1 }) => {
  const H = `h${headingLevel}`;

  //! By default using react router will be bad for screen readers as it will keep silent while performing those transitions

  // For keyboard users the site will remain focused on last clicked link even if we navigate to new link

  // Setting focus in react is one of few imperative dom manipulations we will ever want to do

  // We want to set focus to our heading element once it is shown on mount

  // we will need useRef. use ref will contain the list of mounted components
  const headingRef = useRef(null);

  useEffect(() => {
    // We can see each time a header chagned it referance is logged to console
    // console.log(headingRef.current);

    // Setting focus on a element:
    // Now, when the focus is set, the screen reader will read the title. This will fix issue for screen reader users as well as the keyboard users

    // Last issue is that when we refresh the app it will set the focus on heading.
    headingRef.current.focus();
  }, []);

  return (
    <section>
      <Helmet>
        <title>{`${headingText} | Ultimate Weather Report`}</title>
      </Helmet>
      {/* We use reference of dom element by ref prop.
      We link the ref to the container. When JSX is rendered the ref container will be populated with actual JSX element */}
      {/* Only couple of elements can recive focus like: button, a tag etc. Heading element by default we cannot tab to it. We have to make it interactive by using tabIndex. We should not set tabIndex greater than 0! We can break the application this way for many users. -1 will allow browser to set focus to this element. But the user wont be able to tab to this element. We can test this. When we click on the element it should set focus. But not when we tab*/}
      <H ref={headingRef} tabIndex="-1">
        {headingText}
      </H>
      {children}
    </section>
  );
};

export default Section;
