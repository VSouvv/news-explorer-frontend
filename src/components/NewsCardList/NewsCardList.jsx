import React from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      {props.cards.length > 0
        ? props.cards
            .filter((card) => {
              return card.title !== "[Removed]";
            })
            .slice(0, props.displayAmount)
            .map((card, cardIndex) => (
              <NewsCard
                details={card}
                currentRoute={props.currentRoute}
                isLoggedIn={props.isLoggedIn}
                key={card.url}
              />
            ))
        : ""}
    </ul>
  );
}
