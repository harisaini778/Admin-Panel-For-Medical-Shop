import "./Body.css"; 
import MyImg from "./assets/pills-package.jpg";


const Body = () => {
    return (
        <div>
           <div className="image-container">
            <img src={MyImg} alt="Pharmacist" className="cropped-image" />
            </div>   
      </div>
  )  
}

export default Body;