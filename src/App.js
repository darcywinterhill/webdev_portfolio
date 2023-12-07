import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';

import './App.css';

import ScrollToHash from "./components/ScrollToHash.js";
import Header from "./components/Header";
import MainPage from "./components/pages/MainPage";
import AboutPage from "./components/pages/AboutPage";
import ExperiencePage from "./components/pages/ExperiencePage";
// import SpotifyPlayer from './components/UI/SpotifyPlayer';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToHash />
        <Header />
        <MainPage />
        <AboutPage />
        <ExperiencePage />
      </div>
    </Router>
  );
}

export default App;
