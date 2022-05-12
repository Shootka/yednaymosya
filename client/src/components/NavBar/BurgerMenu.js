import React from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import navElem from "./navList";

const BurgerMenu = () => {

  const isOpen = useSelector(state => state.burgerMenu.data)
  const dispatch = useDispatch()


  const handleClick = () => {
      dispatch({type: "TOGGLE_MENU", payload: !isOpen})
  }

  return (
    <div className="burger-menu" >
      <input id="menu-toggle" type="checkbox" onClick={(e) => handleClick(e)}/>
      <label className="menu-btn" htmlFor="menu-toggle" >
        <span ></span>
      </label>
      <ul className={isOpen ? "menubox active-menu" : "menubox "} >
        {navElem.map(el => {
          return <li key={Math.random()} className={'menu-item'}>
            <NavLink exact={"true"} to={el.href} >{el.name}</NavLink>
          </li>
        })}
      </ul>

    </div>
  );
};

export default BurgerMenu;