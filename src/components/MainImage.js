import "../styling/MainImage.css";

import img from "../images/graduation3.jpg";


const MainImage = () => {
  return (
    // <div className="ImgContainer">
      <img className="Img" src={img} alt="Darcy Winterhill" width="150px" height="auto" />
    // </div>
  )
}

export default MainImage;