import { Link } from "react-router-dom";

import "../../styling/ExperienceLinks.css";
import arrow from "../../images/arrow-yellow.png";

const ExperienceLinks = () => {
  return (
    <div className="LinkWrapper">
      <img
        src={arrow}
        className="Arrow" 
        alt="play arrow"
      />
      <Link 
        to="/ExperiencePage#ProjectSection" 
        className="ExpLink"
      >
        <h3 className="ExpLinkHeading">
          Projects
        </h3>
      </Link>
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