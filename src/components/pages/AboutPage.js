import "./styling/AboutPage.css";

import MainImage from "../MainImage";

const AboutPage = () => {
  return (
    <div 
      className="AboutPageContainer" 
      id="About"
    >
      <div className="AboutWrapper">
        <h2>About</h2>
        <div className="AboutContentWrapper">
          <MainImage />
          <p>
            Hey you! My name is Darcy Winterhill and I am a customer experience focused 
            developer that loves to be creative and find relevant and user-friendly solutions.
            I have a positive and upbeat mindset and somehow I always find myself on a curious road to learn more. 
            There are three things that are fundamental to who I am as a person.
            I believe in <strong>people</strong> and that everyone can accomplish great things.
            To me it's necessary to feel that what I do has a <strong>purpose</strong>.
            I am determined to live a life full of <strong>experiences</strong>, 
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