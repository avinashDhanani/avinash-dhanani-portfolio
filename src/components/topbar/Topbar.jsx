import React from "react";
import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Avinash
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>
              <a href="tel:+919104136213">+91 9104136213</a>
            </span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>
              <a href="mailto:avinashdhanani1@gmail.com">
                avinashdhanani1@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
