import "./styling/MainPage.css";

import Greeting from "../Greeting";

const MainPage = () => {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div 
      className="MainPageContainer" 
      id="Main"
    >
      <Greeting />
    </div>
  )
}

export default MainPage;