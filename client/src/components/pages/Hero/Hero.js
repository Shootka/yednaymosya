import React from 'react';
import NavBar from "../../NavBar/NavBar";
import {NavLink} from "react-router-dom";
import './style.scss'
import Button from "../../Button/Button";
import '../../../App.css'

const Hero = () => {

  return (
    <div className={'container'}>
      <div className={"hero"}>
        <div style={{display: "flex", alignItems: "center", alignContent: "center", textAlign: "center"}}>
          <NavLink to={"/"} style={{border: "none"}}>
            <img className={"logo"} src="img/logo-nobg.png" alt="logo" style={{width: '145px'}}/>
          </NavLink>
          <div className={"title-box"}>
            <p className={"logo-title"}>Єднаймося</p>
            <span className={"sub-title"}>Благодійна організація</span>
          </div>
        </div>
        <NavBar/>
        <Button desc={"Donate"} route={"/accounts"}/>
      </div>
    </div>
  );
};

export default Hero;