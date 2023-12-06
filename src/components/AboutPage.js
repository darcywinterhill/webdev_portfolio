import "../styling/AboutPage.css"
import MainImage from "./MainImage";

const AboutPage = () => {
  return (
    <div className="AboutPageContainer" id="AboutPage">
              <div className="ContentWrapper">
          <h2>About</h2>
          <MainImage />
          <AboutText />
        </div>
    </div>
  )
}

const AboutText = () => {
  return (
    <div className="AboutTextContainer">
      <p>Lorem ipsum bla blabla </p>

    </div>
  )
}

export default AboutPage;