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
        to="" 
        className="ExpLink"
      >
        <h3>
          Projects
        </h3>
      </Link>
      <Link
        to=""
        className="ExpLink"
      >
        <h3>
          Work
        </h3>
      </Link>
      <Link
        to="" 
        className="ExpLink"
      >
        <h3>
          CV
        </h3>
      </Link>
    </div>
  )
}

export default ExperienceLinks