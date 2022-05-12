import React from 'react';
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={""}/>
        <Route path='/about-us' element={""}/>
        <Route path='/blog' element={""}/>
        <Route path='/report' element={""}/>
        <Route path='/contact' element={""}/>
        <Route path='/accounts' element={""}/>
      </Routes>
    </div>
  );
}

export default AppRoutes;