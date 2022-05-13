import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";

const Button = ({route, desc}) => {
  return (
    <Link to={route}>
      <div className={"unit-btn"} >
        <button className={"true-btn"}>{desc}</button>
      </div>
    </Link>
  );
};

export default Button;