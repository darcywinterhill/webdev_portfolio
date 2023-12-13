import { HashLink as Link } from 'react-router-hash-link';

import "./styling/Header.css";

const Header = () => {
  return (
    <header
      className="NavHeader"
    >
      <Link
        smooth to="#Main"
        className="NavLink"
      >
        Home
      </Link>
      <Link 
        smooth to="#About"
        className="NavLink"
      >
        About
      </Link>
      <Link
        smooth to="#Projects"  
        className="NavLink"
      >
        Projects
      </Link>
      <Link
        smooth to="#Work"
        className="NavLink"
      >
        Work
      </Link>
      <Link 
        smooth to="#Misc"
        className="NavLink"
      >
        Misc
      </Link>
      <Link 
        smooth to="#Contact"
        className="NavLink"
      >
        Contact
      </Link>
    </header>
  )
}

export default Header;