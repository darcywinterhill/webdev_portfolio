import "../styling/Header.css";

const Header = () => {
  return (
    <header
      className="NavHeader"
    >
      <a 
        className="NavLink"
      >
          About
      </a>
      <a
        className="NavLink"
      >
        Experience
      </a>
      <a
        className="NavLink"
      >
        Misc
      </a>
      <a
        className="NavLink"
      >
        Contact
      </a>
    </header>
  )
}

export default Header;