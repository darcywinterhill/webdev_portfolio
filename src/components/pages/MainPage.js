import "../../styling/MainPage.css";

import Greeting from "../Greeting";


const MainPage = () => {
  return (
    <div 
      className="MainPageContainer" 
      id="MainPage"
    >
      <Greeting />
    </div>
  )
}

export default MainPage;