import React from 'react';
import './style.scss'
import {Route} from "react-router-dom";

const Button = ({route, desc}) => {
  const handleClick = (e, route) => {
    // <Route path={"/"}/>
  }

  return (
    <button className={"unit-btn"} onClick={(e) => handleClick(e,route)}>{desc}</button>
  );
};

export default Button;