import { BiSolidNavigation } from "react-icons/bi";
import "./index.css";

const Destinations = () => {
  return (
    <div className="destination-container">
      <center>
        <span className="dest-sub-title">Top Selling</span>
        <h1 className="destination-title">Top Destinations</h1>
      </center>
      <div className="destination-list-container">
        {/* card 1*/}
        <div className="destination-card">
          <img src="/images/location-1.png" />
          <div className="destination-details">
            <div>
              <span>Rome, Italty</span>
              <span>$4,42K</span>
            </div>

            <span>
              <BiSolidNavigation className="react-icon" />
              10 Days Trip
            </span>
          </div>
        </div>
        {/* card 2 */}
        <div className="destination-card">
          <img src="/images/location-2.png" />
          <div className="destination-details">
            <div>
              <span>Rome, Italty</span>
              <span>$4,42K</span>
            </div>

            <span>
              <BiSolidNavigation className="react-icon" />
              10 Days Trip
            </span>
          </div>
        </div>
        {/* card3  */}
        <div className="destination-card">
          <img src="/images/location-3.png" />
          <div className="destination-details">
            <div>
              <span>Rome, Italty</span>
              <span>$4,42K</span>
            </div>
            <div>
              <BiSolidNavigation className="react-icon" />
              <span>10 Days Trip</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
