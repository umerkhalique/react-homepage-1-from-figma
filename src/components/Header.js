import React, { Fragment } from "react";
import logo from "../assets/logo.png";
import List from "../assets/List.svg"
import "../App.css";

function Header() {
  return (
    <Fragment>
      <nav className="nav">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-group">
          <ul>
            <li className="li-1">
              <a href="#">Features</a>
              <i class="fa-solid fa-angle-down"></i>
            </li>
            <li className="li-2">
              <a href="#">Company</a>
              <i class="fa-solid fa-angle-down"></i>
            </li>
            <li className="li-3">
              <a href="#">Careers</a>
            </li>
            <li className="li-4">
              <a href="#">About</a>
            </li>
            <div className="login-group">
              <div className="login-1">
                <li className="li-5">
                  <a href="#">Login</a>
                </li>
              </div>
              <div className="login-2">
                <div className="login-3">
                  <li className="li-6">
                    <a href="#">Register</a>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
