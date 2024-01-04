import "./styling/LinkButton.css";

const LinkButton = ({ webpage, text }) => {
  return (
    <a 
      className="ProjectLink" 
      href={webpage}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  )
}

export default LinkButton;