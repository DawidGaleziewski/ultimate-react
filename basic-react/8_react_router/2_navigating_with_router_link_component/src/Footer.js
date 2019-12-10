import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    {/* If we have two navs it is good practice to help screen readers with aria-label */}
    <nav aria-label="Secondary">
      <ul>
        <li>
          {/* We use Link same as a tag */}
          {/* React will still render a a tag in the DOM */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
