import { BrowserRouter as Router } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash.js";
import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import MainPage from "./components/MainPage.js";
import AboutPage from "./components/AboutPage.js"
import SpotifyPlayer from './components/UI/SpotifyPlayer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToHash />
        <Header />
        <MainPage />
        <AboutPage />
        
      </div>
    </Router>
  );
}

export default App;
