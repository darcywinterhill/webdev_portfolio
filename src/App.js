import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';

import './App.css';

import Header from "./components/Header";
import MainPage from "./components/pages/MainPage";
import AboutPage from "./components/pages/AboutPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import MiscPage from "./components/pages/MiscPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainPage />
        <AboutPage />
        <ExperiencePage />
        <MiscPage />
      </div>
    </Router>
  )
}

export default App;
