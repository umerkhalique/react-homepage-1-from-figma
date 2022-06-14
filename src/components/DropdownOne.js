import React, { Fragment } from "react";
import "../App.css";
import List from "../assets/List.svg";
import Calendar from "../assets/calendar.svg";
import Bell from "../assets/Bell.svg";
import Combined from "../assets/combined.svg";
function DropdownOne(props) {

if(props.onClickDropdownOne === true){
  return(
    <div className="dropdown-1">
        <div className="li1">
          <img className="img1" src={List}></img>
          <p className="p1">Todo List</p>
        </div>
        <div className="li2">
          <img className="img2" src={Calendar}></img>
          <p className="p2">Calendar</p>
        </div>
        <div className="li3">
          <img className="img3" src={Bell}></img>
          <p className="p3">Reminders</p>
        </div>
        <div className="li4">
          <img className="img4" src={Combined}></img>
          <p className="p4">Planning</p>
        </div>
      </div>
  )
}


  return (
    <></>
     
   
  );
}

export default DropdownOne;
