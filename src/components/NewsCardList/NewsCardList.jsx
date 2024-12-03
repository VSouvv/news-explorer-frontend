import React from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      {props.cards.map((card) => (
        <NewsCard
          details={card}
          currentRoute={props.currentRoute}
          isLoggedIn={props.isLoggedIn}
          key={card.id}
        />
      ))}
    </ul>
  );
}
