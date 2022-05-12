import React, {useEffect} from 'react';
import './style.scss'
import '../../../App.css'
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
  const newsList = useSelector(state => state.news.data)
  const dispatch = useDispatch()

  useEffect(()=>{

  },[])

  return (
    <div className={"main-page "}>

    </div>
  );
};

export default Main;