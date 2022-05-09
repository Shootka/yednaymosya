import React from 'react';
import NavBar from "../../navBar/navBar";
import {NavLink} from "react-router-dom";
import './style.scss'
const Hero = () => {
  return (
    <div className={"hero"}>
      <NavLink to={"/"}><img src="img/logo.svg" alt="logo" style={{width: '200px'}} /></NavLink>
      <NavBar/>
      {/*<Button/>*/}
    </div>
  );
};

export default Hero;