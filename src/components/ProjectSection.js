import "./styling/ProjectSection.css";

import plus from "../images/plus.png";
import LinkButton from "../components/UI/LinkButton";

const ProjectSection = ({ title, webpage, image, about, tech }) => {

  const listItems = tech.map((tools, index) =>
    <li key={index}>
      <img 
        src={plus}
        className="Plus"
        alt="plus sign"
      /> {tools}
    </li>
);

  return (
    <div className="ProjectWrapper">
      <div className="TechContainer">
        <img 
          src={image} 
          className="ProjectImage" 
          alt="project"
        />
        <div className="TechWrapper">
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
      <div className="ContentWrapper">
        <h4>
          {title}
        </h4>
        <p>
          {about}
        </p>
      </div>
      <LinkButton webpage={webpage} />
    </div>
  )
}

export default ProjectSection;