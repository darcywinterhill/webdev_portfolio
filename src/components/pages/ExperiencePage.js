import "../../styling/ExperiencePage.css";
import ExperienceLinks from "../UI/ExperienceLinks";

const ExperiencePage = () => {
  return (
    <div 
      className = "ExperiencePageContainer"
      id = "ExperiencePage" >
        <div className="ExperienceWrapper">
          <h2>Experience</h2>
          <ExperienceLinks />
        </div>
    </div>
  )
}

export default ExperiencePage;