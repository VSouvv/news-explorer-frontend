import React from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList(props) {
  return (
    <section className="news-card-list">
      {!props.isSaved && (
        <h3 className="news-card-list__search-title">Search results</h3>
      )}
      <ul className="news-card-list__card-list">
        {props.cards.map((card) => (
          <NewsCard
            details={card}
            isSaved={props.isSaved}
            isLoggedIn={props.isLoggedIn}
            key={card.id}
          />
        ))}
      </ul>
    </section>
  );
}
