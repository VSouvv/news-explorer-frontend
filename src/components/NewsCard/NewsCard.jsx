import React from "react";

import "./NewsCard.css";

export default function NewsCard(props) {
  return (
    <div className="news-card">
      <img className="news-card__image" src={props.details.img} />
      <div className="news-card__bottom">
        <p className="news-card__date">{props.details.date}</p>
        <div className="news-card__title">
          <h4 className="news-card__title-text">{props.details.title}</h4>
        </div>
        <div className="news-card__body">
          <p className="news-card__body-text">{props.details.body}</p>
        </div>
        <p className="news-card__author">{props.details.author}</p>
      </div>
      {props.currentRoute === "Saved" ? (
        <>
          <button
            className="news-card__save-button news-card__save-button_unsave"
            type="button"
          >
            <div className="news-card__save-button-info">Remove from saved</div>
          </button>
          <div className="news-card__keyword">{props.details.keyword}</div>
        </>
      ) : (
        <button className="news-card__save-button" type="button">
          <div className="news-card__save-button-info">
            {props.isLoggedIn ? "Save article" : "Sign in to save articles"}
          </div>
        </button>
      )}
    </div>
  );
}
