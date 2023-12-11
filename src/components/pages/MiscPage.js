import "./styling/MiscPage.css"
import duck from "../../images/rubberduck.png";
import github from "../../images/githublogo.png";
import linkedin from "../../images/linkedinlogo.png";
import email from "../../images/emaillogo.png";

import SpotifyPlayer from "../UI/SpotifyPlayer.js";

const MiscPage = () => {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div 
      className="MiscPageContainer" 
      id="Misc"
    >
      <div className="MiscWrapper">
        <h2>Misc</h2>
        <div className="MiscContentWrapper">
          <div className="MiscContent">
            <h4>
              The Programming Bootcamp Music Compilation
            </h4>
            <p>
              "I love music.
              So much that when I was younger (and wasn't good enough at any band stuff, even though I tried it) 
              my goal was to get a job as the girl/guy that follows the band on tour and sells merch. 
              Just to be a part of it..."
            </p>
            <SpotifyPlayer />
            <div className="ExtraLinkContainer">
              <a 
                href="https://darcy-winterhill.medium.com/the-programming-bootcamp-music-compilation-e4ee97c4fcd"
                className="ExtraLink"
                target="_blank"
                rel="noreferrer"
              >
                Read full article
              </a>
            </div>
          </div>
          <div className="MiscContent">
            <img
              src={duck} 
              className="Duck" 
              alt="rubber duck"
            />
          </div>
          <div className="MiscContent">
            <h4>
              "I have never tried that before, so I think I should definitely be able to do that."
            </h4>
            <div className="ExtraLinkContainer">
              <a 
                href="https://darcy-winterhill.medium.com/i-have-never-tried-that-before-so-i-think-i-should-definitely-be-able-to-do-that-46892f4f8bca"
                className="ExtraLink"
                target="_blank"
                rel="noreferrer"
              >
                Read full article
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer id="Contact">
        <a 
          href="https://www.linkedin.com/in/darcywinterhill/" 
          target="_blank" 
          rel="noreferrer"
        >
          <img 
            src={linkedin} 
            alt="linkedin logo"
          />
        </a>
        <a 
          href="https://github.com/darcywinterhill" 
          target="_blank" 
          rel="noreferrer"
        >
          <img 
            src={github} 
            alt="github logo"
          />
        </a>
        <a href="mailto:darcy.winterhill@gmail.com">
          <img 
            src={email} 
            alt="email logo"
          />
        </a>
      </footer>
    </div>
  )
}

export default MiscPage;