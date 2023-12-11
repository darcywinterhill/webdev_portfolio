import { Link } from "react-router-dom";

import "./styling/ExperienceLinks.css";

const ExperienceLinks = () => {
  return (
    <div className="LinkWrapper">
      <Link 
        to="/ExperiencePage#ExperienceSection" 
        className="ExpLink"
      >
        <h3 className="ExpLinkHeading">
          Projects
        </h3>
      </Link>
      &nbsp;
      &nbsp;
      <p>
        or
      </p>
      &nbsp;
      &nbsp;
      <Link
        to="/ExperiencePage#WorkSection"
        className="ExpLink"
      >
        <h3 className="ExpLinkHeading">
          Work
        </h3>
      </Link>
    </div>
  )
}

export default ExperienceLinks