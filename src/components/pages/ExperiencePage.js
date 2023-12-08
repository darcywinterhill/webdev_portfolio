import "./styling/ExperiencePage.css";

import work from "../../data/Work.json";
import project from "../../data/Project.json";

import ExperienceLinks from "../UI/ExperienceLinks";
import WorkSection from "../../components/WorkSection";
import ProjectSection from "../../components/ProjectSection";

const allWorkData = (values) => {
  return (
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

const allProjectData = (values) => {
  return (
    <ProjectSection 
      key={values.title}
      title={values.title}
      webpage={values.webpage}
      image={values.image}
      about={values.about}
      tech={values.tech}
    />
  )
}

const ExperiencePage = () => {
  return (
    <div 
      className = "ExperiencePageContainer"
      id = "ExperiencePage" 
    >
        <div className="ExperienceHeader">
          <h2>Experience</h2>
          <ExperienceLinks />
        </div>

        <div 
          className="ProjectSectionContainer" 
          id="ProjectSection"
        >
          <h3 className="ExperienceHeading1">Projects</h3>
        {project.map(allProjectData)}

          <div className="ExtraLinkContainer">
            <p>View more projects on&nbsp;</p>
            <a 
              href="https://github.com/darcywinterhill" 
              className="ExtraLink" 
              target="_blank" 
              rel="noreferrer">
                Github
            </a>
          </div>

        </div>
        <div 
          className="WorkSectionContainer" 
          id="WorkSection"
        >
          <h3 className="ExperienceHeading2">Work</h3>
        {work.map(allWorkData)}
        </div>

        <div className="ExtraLinkContainer">
            <p>View full resume&nbsp;</p>
            <a 
              href="https://darcywinterhill.github.io/CV/" 
              className="ExtraLink" 
              target="_blank" 
              rel="noreferrer">
                here
            </a>
          </div>
      </div>
    // </div>
  )
}

export default ExperiencePage;