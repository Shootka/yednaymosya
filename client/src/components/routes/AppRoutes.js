import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
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