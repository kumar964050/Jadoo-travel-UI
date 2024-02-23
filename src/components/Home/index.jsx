import { IoIosPlay } from "react-icons/io";
import Button from "../../components/UI/Button";

import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <span>Best Destinations around the world</span>
        <h1>
          Travel, enjoy <br />
          and live a new <br />
          and full life
        </h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="home-content-btn-container">
          <Button className="primary-btn">Find out more</Button>
          <div>
            <Button className="secondary-btn play-btn">
              <IoIosPlay className="react-icon" />
            </Button>
            <p>Play Demo</p>
          </div>
        </div>
      </div>
      <div className="home-image-container">
        <img src="/images/Traveller.png" />
      </div>
    </div>
  );
};

export default Home;
