
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <header>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
          <Link to="/account"> Account</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="/snippets"> Snippets</Link>
        </li>

      </ul>
    </nav>
  </header>
  )
}
export default Navbar;