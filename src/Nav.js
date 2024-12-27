import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Hero
          </Link>
        </li>
        <li>
          <Link to="indiangov" smooth={true} duration={500}>
            Indian Gov
          </Link>
        </li>
        <li>
          <Link to="popularservices" smooth={true} duration={500}>
            Popular Services
          </Link>
        </li>
        <li>
          <Link to="whycollance" smooth={true} duration={500}>
            Why Collance
          </Link>
        </li>
        <li>
          <Link to="findthemgigs" smooth={true} duration={500}>
            Find Them Gigs
          </Link>
        </li>
        <li>
          <Link to="skilledfreelance" smooth={true} duration={500}>
            Skilled Freelance
          </Link>
        </li>
        <li>
          <Link to="quickguide" smooth={true} duration={500}>
            Quick Guide
          </Link>
        </li>
        <li>
          <Link to="gigsmadesimpler" smooth={true} duration={500}>
            Gigs Made Simpler
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;