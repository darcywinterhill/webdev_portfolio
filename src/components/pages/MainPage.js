import "./styling/MainPage.css";

import Greeting from "../Greeting";

const MainPage = () => {
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