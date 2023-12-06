import { Link } from 'react-router-dom';

import "../styling/Header.css";

const Header = () => {
  return (
    <header
      className="NavHeader"
    >
      <Link
        to="/MainPage#MainPage"
        className="NavLink"
      >
        Home
      </Link>
      <Link 
        to="/AboutPage#AboutPage"
        className="NavLink"
      >
        About
      </Link>
      <Link
        to="/ExperiencePage#ExperiencePage"  
        className="NavLink"
      >
        Experience
      </Link>
      <Link 
        to="/MiscPage#MiscPage"
        className="NavLink"
      >
        Misc
      </Link>
      <Link 
        to="/ContactPage#ContactPage"
        className="NavLink"
      >
        Contact
      </Link>
    </header>
  )
}

export default Header;