import "./styling/WorkSection.css";

import plus from "../images/plus.png";

const WorkSection = ({ role, place, time, keywords }) => {

    const listItems = keywords.map((keyword, index) =>
      <li key={index}>
        <img 
          src={plus}
          className="Plus"
          alt="plus sign"
        /> {keyword}
      </li>
    );

  return(
    <div className="WorkWrapper">
      <h4>{role}</h4>
      <p className="PlaceP">
        {place}
      </p>
      <p className="TimeP">
        {time}
      </p>
      <h5>
        Keywords:
      </h5>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default WorkSection;