import React from 'react';
import './style.scss'

const Button = ({route, desc}) => {
  const handleClick = (e, route) => {
   e.view.navigator.href = route
  }

  return (
    <div className={"unit-btn"} onClick={(e) => handleClick(e, route)}>
      <button className={"true-btn"} >{desc}</button>

    </div>
  );
};

export default Button;