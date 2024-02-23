import { MdOutlineEmail } from "react-icons/md";
import "./index.css";

import "../../index.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <img className="sub-sender" src="/images/Group 77.png" />
      <h1>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h1>
      <form>
        <div>
          <input placeholder="Your Email" />
          <MdOutlineEmail className="react-icon sub-icon" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
