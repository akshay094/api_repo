import React from "react";
import "../../stylesheets/usermenu.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useSelector } from "react-redux";

function Usermenu() {
  const show = useSelector((state) => state.showPopup.showMenu);

  return (
    <div
      className={show ? "usermenu-container" : "usermenu-container invisible"}
    >
      <div className="wrapper-upper">
        <div className="usermenu-upper">
          <div>
            <h5>COMMUNITY</h5>
            <ul>
              <li>Networks</li>
              <li>Chat</li>
              <li>Events</li>
              <li>Region</li>
              <li>Directory</li>
            </ul>
          </div>
          <div>
            <h5>AAPI</h5>
            <ul>
              <li>Education</li>
              <li>Benefits</li>
              <li>Projects</li>
              <li>Newsletters</li>
              <li>Journals</li>
            </ul>
          </div>
          <div>
            <div className="login-container">
              <ul>
                <li>
                  <PersonAddAltIcon />
                  <span>Sign up</span>
                </li>
                <li>
                  <LockOpenIcon />
                  Log in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-lower">
        <div className="usermenu-lower">
          <div>
            <ul>
              <li>ABOUT</li>
              <li>BYLAWS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>CAREER</li>
              <li>MEMBER</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Usermenu;
