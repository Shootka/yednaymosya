import React, {useEffect} from 'react';
import './style.scss'
import '../../../App.css'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios"
import CardList from "../../CardList/CardList";
import Button from "../../Button/Button";

const Main = () => {
  const newsList = useSelector(state => state.news.data)
  const dispatch = useDispatch()

  useEffect(() => {
    axios("newsList.json")
      .then(res => dispatch({type: "SET_NEWS", payload: res.data}))
  }, [])

  return (
    <div className={"main-page"}>
      <div className={"container "}>
        <div className={"main-page__title-block"}>
          <h1 className={"main-page__title"}>БЛАГОДІЙНИЙ ФОНД “ЄДНАЙМОСЯ”</h1>
          <img className={"main-page__flag"} src="img/paint-flag.png" alt=""/>
        </div>
        <CardList cards={newsList}/>
        <div className={"btn-box"}>
          <Button desc={"Потрібна допомога?"} route={"#"}/>
        </div>
      </div>
    </div>
  );
};

export default Main;