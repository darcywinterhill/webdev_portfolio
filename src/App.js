
import './App.css';
import Header from "./components/Header.js";
import OnePage from "./components/OnePage.js";
import Greeting from "./components/Greeting.js";
// import MainImage from "./components/MainImage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <OnePage 
        bgcolor="#F9EBD9">
          <Greeting />
      </OnePage>
      <OnePage
        bgcolor="#8D4038">

      </OnePage>
      
    </div>
  );
}

export default App;
