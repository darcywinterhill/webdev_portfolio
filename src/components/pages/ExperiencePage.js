import "../../styling/ExperiencePage.css";
import ExperienceLinks from "../UI/ExperienceLinks";
import WorkSection from "../../components/WorkSection";
import work from "../../data/Work.json";

const allData = (values) => {
  return(
    <WorkSection
      key={values.role}
      role={values.role}
      place={values.place}
      time={values.time}
      description={values.description}
      keywords={values.keywords}
    />
  )
}

const ExperiencePage = () => {
  return (
    <div 
      className = "ExperiencePageContainer"
      id = "ExperiencePage" 
    >
      <div 
        className="ExperienceWrapper"
      >
        <h2>Experience</h2>
        <ExperienceLinks />
        {work.map(allData)}
      </div>
    </div>
  )
}

export default ExperiencePage;