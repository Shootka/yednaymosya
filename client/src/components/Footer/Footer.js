import React, {useEffect} from 'react';
import Carousel from "../Carousel/Carousel";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";

const Footer = () => {
  const slideList = useSelector(state => state.news.data)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   axios("http://localhost:8080/api/main-page/news")
  //     .then(res => dispatch({type: "SET_SLIDES", payload: res.data}))
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div className={"bottom"}>
      <Carousel slidesList={slideList}/>
      <div className={"bottom__inform-block"}>
        <img src="" alt="" className={""}/>
        <img src="" alt="" className={""}/>

        <div className={"contacts"}>
          <div className={"contacts__photos"}>
            <img src='' alt=""/>
            <img src="" alt=""/>
          </div>
          <div>
            <h4>Контакти</h4>
            <a href="mailto: yednaymosya@gmail.com">yednaymosya@gmail.com</a>
            <p>+3805500903</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;