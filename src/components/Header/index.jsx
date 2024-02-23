// icons
import { IoIosMenu } from "react-icons/io";

import Checkbox from "../UI/checbox";
import Button from "../UI/Button";

import "./index.css";

const Header = ({ theme, setTheme }) => {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <div className="nav-title-container">
          <a href="#">
            <img src={theme ? "/images/darkLogo.png" : "/images/Logo.png"} />
          </a>
        </div>

        <input id="menu-btn" className="menu-btn" type="checkbox" />
        <label htmlFor="menu-btn" className="menu-icon">
          <IoIosMenu className="react-icon nav-icon" />
        </label>

        <ul className="nav-menu-container">
          <li className="nav-li-item">
            <a className="nav-link" href="#Destination">
              Destination
            </a>
          </li>
          <li className="nav-li-item">
            <a className="nav-link" href="#Hostels">
              Hostels
            </a>
          </li>
          <li className="nav-li-item">
            <a className="nav-link" href="#Flights">
              Flights
            </a>
          </li>
          <li className="nav-li-item">
            <a className="nav-link" href="#Bookings">
              Bookings
            </a>
          </li>
          <li className="nav-li-item">
            <Button type="button" className="nav-btn">
              Login
            </Button>
          </li>
          <li className="nav-li-item">
            Dark Mode
            <Checkbox value={theme} setTheme={setTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
