import React from 'react';

// As sections have diffrent content we use the children prop
const Section = ({ children, headingText, headingLevel = 2 }) => {
  const H = `h${headingLevel}`;
  return (
    <section>
      {/* Creating elements with strings is possible but should NOT be abused */}
      <H>{headingText}</H>
      {children}
    </section>
  );
};

export default Section;
