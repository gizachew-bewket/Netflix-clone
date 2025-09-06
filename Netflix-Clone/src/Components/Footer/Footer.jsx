import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className=" text-white py-5">
      <div className="container text-center">
        {/* Social Icons */}
        <div className="mb-4 d-flex justify-content-start gap-3">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Footer links */}
        <div className="row text-start justify-content-center mb-4">
          <div className="col-6 col-md-3 mb-1">
            <ul className="list-unstyled">
              <li>Audio Description</li>
              <li>Investor and Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-1">
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-1">
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-1">
            <ul className="list-unstyled">
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Service code and copyright */}
        <div className="text-start">
          <div className="mb-2 mt-0">
            <button className="btn btn-outline-secondary btn-sm">
              Service Code
            </button>
          </div>
          <div>© 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
