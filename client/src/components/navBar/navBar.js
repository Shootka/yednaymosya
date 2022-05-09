import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"
const NavBar = () => {
  return (
    <div>
      <ul className={'nav-bar'}>
        <li className={'item'}><NavLink exact to='/about-us' activeClassName='selected'>ПРО НАС</NavLink></li>
        <li className={'item'}><NavLink exact to='/blog' activeClassName='selected'>НАШ БЛОГ</NavLink></li>
        <li className={'item'}><NavLink exact to='/report' activeClassName='selected'>ЗВІТИ</NavLink></li>
        <li className={'item'}><NavLink exact to='/contact' activeClassName='selected'>КОНТАКТИ</NavLink></li>
        <li className={'item'}><NavLink exact to='/accounts' activeClassName='selected'>РАХУНКИ</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;