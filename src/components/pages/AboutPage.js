import "../../styling/AboutPage.css"

import MainImage from "../MainImage";

const AboutPage = () => {
  return (
    <div 
      className="AboutPageContainer" 
      id="AboutPage"
    >
      <div
        className="AboutWrapper"
      >
        <h2>About</h2>
        <div 
          className="AboutContentWrapper"
        >
          <MainImage />
          <p>bl blab bla</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;