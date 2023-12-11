import { Link } from 'react-router-dom';

import "./styling/Header.css";

const Header = () => {
  return (
    <header
      className="NavHeader"
    >
      <Link
        to="#Main"
        className="NavLink"
      >
        Home
      </Link>
      <Link 
        to="#About"
        className="NavLink"
      >
        About
      </Link>
      <Link
        to="#Projects"  
        className="NavLink"
      >
        Projects
      </Link>
      <Link
        to="#Work"
        className="NavLink"
      >
        Work
      </Link>
      <Link 
        to="#Misc"
        className="NavLink"
      >
        Misc
      </Link>
      <Link 
        to="#Contact"
        className="NavLink"
      >
        Contact
      </Link>
    </header>
  )
}

export default Header;