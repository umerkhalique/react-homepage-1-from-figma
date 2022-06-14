import React, { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";

function Header(props) {
  const [isActive, setActive] = useState("false");
  const [isActiveTwo, setActiveTwo] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  const ToggleClassTwo = () => {
    setActiveTwo(!isActiveTwo);
  };

  function enteredState() {
    props.state(true);
  }

  function enteredStateTwo() {
    props.stateTwo(true);
  }

  return (
    <Fragment>
      <nav className="nav">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-group">
          <ul>
            <li
              className="li-1"
              onClick={() => {
                ToggleClass();
                enteredState();
              }}
            >
              <a href="#">Features</a>
              <i
                className={
                  isActive ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"
                }
              ></i>
            </li>
            <li className="li-2" onClick={() => {enteredStateTwo(); ToggleClassTwo();}}>
              <a href="#">Company</a>
              <i className={
                  isActiveTwo ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"
                }></i>
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
