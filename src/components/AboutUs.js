import "../stylesheets/AboutUs.css";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function AboutUs() {
  return (
    <div id="about-section" className="about-container">
      <div className="about-image">
        <img
          src="Little-Lemon-Logo-circle-white.png"
          alt="Little Lemon Logo circle"
        />
      </div>
      <div className="about-info-container">
        <h1>LITTLE LEMON</h1>
        <p>19/20 ROYAL HIBERNIAN WAY DUKE LANE UPPER DUBLIN 2</p>
        <p>
          EMAIL: HELLO@LITTLELEMON.IE CALL US: 01-905 8777 DM US ON TWITTER
          @LittleLemonRHW
        </p>
      </div>
      <div className="map-image-container">
        <img src={require("../Gallery/map.jpg")} alt="Map Image" />
      </div>
      <div className="follow-container">
        <p id="follow-container">FOLLOW US:</p>
        <div className="about-react-icon">
          <a href="#">
            <ImFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
