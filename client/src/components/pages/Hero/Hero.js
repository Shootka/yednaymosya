import React from 'react';
import NavBar from "../../navBar/navBar";
import {NavLink} from "react-router-dom";
import './style.scss'
import Button from "../../Button/Button";

const Hero = () => {
  return (
    <div className={"hero"}>
      <div style={{display: "flex", alignItems: "center", alignContent: "center", textAlign: "center"}}>
        <NavLink to={"/"}>
          <img src="img/logo-nobg.png" alt="logo" style={{width: '145px'}}/>
        </NavLink>
        <div>
          <p className={"logo-title"}>Єднаймося</p>
          <span className={"sub-title"}>Благодійна організація</span>
        </div>
      </div>
      <NavBar/>
      <Button desc={"Donate"}/>

    </div>
  );
};

export default Hero;