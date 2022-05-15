import React from 'react';
import Button from "../Button/Button";
import './style.scss'


const Card = ({title, url, href}) => {
  return (
    <div className={"card"} >
      <img src={"/" + url} alt="" className={"card__image"}/>
      <div className={"card__block"}>
        <p className={"card__title"}>{title}</p>
      </div>
      <div className={"card__hidden-block"}>
        <Button desc={"Дізнатіся більше"} route={href}/>
      </div>
    </div>
  );
};

export default Card;