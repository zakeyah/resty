import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
      <header>
        <h1>RESTy</h1>
        <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/history">History </Link>
                    </li>
                    <li>
                        <Link to="/help">help</Link>
                    </li>
                    
                </ul>
            </nav>
      </header>
    )
  }

  export default Header;