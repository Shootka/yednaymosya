import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"
import BurgerMenu from "./BurgerMenu";
import {useDispatch, useSelector} from "react-redux";
import navElem from "./navList";

const NavBar = () => {

  return (
    <div>
      <ul className={'nav-bar'}>
        {navElem.map(el => {
          return <li key={Math.random()} className={'item'}>
            <NavLink exact={"true"} to={el.href}>{el.name}</NavLink>
          </li>
        })}
      </ul>
      <BurgerMenu/>
    </div>
  );
};

export default NavBar;