import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-item">
        <h1 className="footer-item-title">Jadoo.</h1>
        <p className="footer-item-desc">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div className="footer-item">
        <h1 className="footer-item-title-2">company</h1>
        <span className="footer-item-sub-title">About</span>
        <span className="footer-item-sub-title">careers</span>
        <span className="footer-item-sub-title">Mobile</span>
      </div>
      <div className="footer-item">
        <h1 className="footer-item-title-2">Contact</h1>
        <span className="footer-item-sub-title">Help/FAQ</span>
        <span className="footer-item-sub-title">Press</span>
        <span className="footer-item-sub-title">Affilates</span>
      </div>
      <div className="footer-item">
        <h1 className="footer-item-title-2">More</h1>
        <span className="footer-item-sub-title">Airlinefees</span>
        <span className="footer-item-sub-title">Airline</span>
        <span className="footer-item-sub-title">Low Fare tips</span>
      </div>
      <div className="footer-item footer-score-icons-container ">
        <div className="footer-item-icon-container">
          <div>
            <FaFacebookF className="react-icon footer-icons" />
          </div>
          <div>
            <BiLogoInstagram className="react-icon footer-icons" />
          </div>
          <div>
            <TiSocialTwitter className="react-icon footer-icons" />
          </div>
        </div>
        <center>
          <span>Discover our app</span>
        </center>
        <div className="footer-item-app-store-container">
          <img src="/images/Google Play.png" />
          <img src="/images/Play Store.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
