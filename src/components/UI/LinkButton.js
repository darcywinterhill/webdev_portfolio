import "./styling/LinkButton.css";

const LinkButton = ({ webpage }) => {
  return (
    <a className="ProjectLink" 
    href={webpage}
    target="_blank"
    rel="noreferrer"
  >
    View Project
  </a>

  )
}

export default LinkButton;