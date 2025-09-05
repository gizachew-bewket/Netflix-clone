import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="outer-footer">
      <div className="inner-footer-container">
        {/* Social Icons */}
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Links */}
        <div className="footer-links">
          <ul>
            <li>Audio Description</li>
            <li>Investor and Relations</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Service code and copyright */}
        <div className="service-code">Service Code</div>
        <div className="footer-text">© 1997-2024 Netflix, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
