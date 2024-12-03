import React from "react";

import "./SavedNews.css";
import { cards } from "../../constants/cards";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import placeHolderImg from "../../assets/card_placeholder.png";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SavedNews(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <div className=" page__section saved-news">
      <SavedNewsHeader currentUser={currentUser} />
      <section className="saved-news__news-section">
        <NewsCardList
          isLoggedIn={props.isLoggedIn}
          currentRoute={props.currentRoute}
          cards={cards}
        />
      </section>
    </div>
  );
}
