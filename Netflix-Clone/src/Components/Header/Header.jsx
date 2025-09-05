import React from "react";
import "./Header.css";
import logo from "../../assets/images/net.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="container-fluid bg-black text-white p-3 d-flex justify-content-between align-items-center">
      {/* Left side */}
      <div className="col-md-6">
        <ul className="d-flex list-unstyled mb-0 align-items-center gap-4">
          <li>
            <img src={logo} alt="Netflix Logo" width={100} />
          </li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      {/* Right side */}
      <div className="col-md-6 d-flex justify-content-end">
        <ul className="d-flex list-unstyled mb-0 align-items-center gap-4">
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsIcon />
          </li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
