import React from "react";
import "./Header.css";
import logo from "../../assets/images/net.jpg";

const Header = () => {
  return (
    <div>
      <div className=" flex-row  sm:flex sm:flex-row  items-center gap-6  bg-black text-white  justify-between heigth:100px;">
        <div className="flex justify-between items-center p-4 h-20">
          <ul className="flex-row  sm:flex sm:flex-row  items-center gap-6 background-color: transparent p-4 hieght:10vh;">
            <li>
              <img src={logo} alt="" width={100} />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by language</li>
          </ul>
        </div>

        <div className="flex justify-between items-center p-4 h-20">
          <ul className="flex-row  sm:flex sm:flex-row  items-center gap-6 background-color: transparent p-4 hieght:10vh;">
            <li>SearchIcon</li>
            <li>NotificationIcon</li>
            <li>AccountBoxIcon</li>
            <li>ArrowDropDownIcon</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
