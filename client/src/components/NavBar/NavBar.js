import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"
import BurgerMenu from "./BurgerMenu";
import {useDispatch, useSelector} from "react-redux";
import navElem from "./navList";

const NavBar = () => {
  const isOpen = useSelector(state => state.burgerMenu.data)
  const dispatch = useDispatch()



  const toggleMenu = () => {
    dispatch({type: "TOGGLE_MENU", payload: !isOpen})
  }
  return (
    <div onClick={() => toggleMenu()}>
      <ul className={'nav-bar'}>
        {navElem.map(el => {
          return <li key={Math.random()} className={'item'}>
            <NavLink exact to={el.href}>{el.name}</NavLink>
          </li>
        })}
      </ul>
      <BurgerMenu open={isOpen}/>
    </div>
  );
};

export default NavBar;