import React from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import navElem from "./navList";

const BurgerMenu = () => {
  const isOpen = useSelector(state => state.burgerMenu.data)
  const dispatch = useDispatch()

  const handleClick = (eve) => {
    dispatch({type: "TOGGLE_MENU", payload: !isOpen})
    eve.currentTarget.checked = !isOpen
  }
  return (
    <div className="burger-menu" style={{marginTop: "-14px"}}>
      <input id="menu-toggle" type="checkbox"
             onClick={(event) => handleClick(event)}
      />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>
      <ul className="menubox">
        {navElem.map(el => {
          return <li key={Math.random()} className={'menu-item'}>
            <NavLink exact to={el.href}>{el.name}</NavLink>
          </li>
        })}
      </ul>
    </div>
  );
};

export default BurgerMenu;