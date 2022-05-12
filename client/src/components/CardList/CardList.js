import React from 'react';
import Card from "../Card/Card";
import './style.scss'

const CardList = ({cards}) => {
  return (
    <div className={"card-list"}>
      {cards.map(card => {
        return <Card key={card.id}
                     title={card.title}
                     url={card.url}
                     href={card.href}/>
      })}
    </div>
  );
};

export default CardList;