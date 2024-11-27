import React from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList(props) {
  return (
    <section className="news-card-list">
      {props.currentRoute == "Home" && (
        <h3 className="news-card-list__search-title">Search results</h3>
      )}
      <ul className="news-card-list__card-list">
        {props.cards.map((card) => (
          <NewsCard
            details={card}
            currentRoute={props.currentRoute}
            isLoggedIn={props.isLoggedIn}
            key={card.id}
          />
        ))}
      </ul>
      {props.currentRoute === "Home" && (
        <button className="news-card-list__show-more">Show More</button>
      )}
    </section>
  );
}
