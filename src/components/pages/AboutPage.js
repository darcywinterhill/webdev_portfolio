import "./styling/AboutPage.css";

import MainImage from "../MainImage";

const AboutPage = () => {
  return (
    <div 
      className="AboutPageContainer" 
      id="AboutPage"
    >
      <div className="AboutWrapper">
        <h2>About</h2>
        <div className="AboutContentWrapper">
          <MainImage />
          <p>
            Hey you! My name is Darcy Winterhill and I am customer experience focused 
            and I love to be creative and find clever solutions. I laugh a lot 
            and I am convinced that I am capable to do everything I set my mind to. 
            There are three things that are fundamental to who I am as a person.
            I believe in <strong>people</strong> and that everyone can accomplish great things.
            To me it's necessary to feel that what I do has a <strong>purpose</strong>.
            I am determined to live a full life of <strong>experiences</strong>, 
            not giving up on dreams because of fear or comfort.
          </p>
          <br />
          <p>
            Let's talk!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;