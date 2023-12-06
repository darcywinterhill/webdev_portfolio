import "../styling/MainImage.css";

import img from "../images/graduation3.jpg";


const MainImage = () => {
  return (
    <div className="ImgContainer">
      <img className="Img" src={img} alt="Darcy Winterhill" width="100%" height="auto" />
    </div>
  )
}

export default MainImage;