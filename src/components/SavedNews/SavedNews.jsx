import React from "react";

import "./SavedNews.css";
import { cards } from "../../constants/cards";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import placeHolderImg from "../../assets/card_placeholder.png";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SavedNews(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    props.setCurrentRoute("Saved");
  }, []);
  return (
    <div className=" page__section saved-news">
      <SavedNewsHeader
        currentUser={currentUser}
        savedCards={props.savedCards}
        setSavedCards={props.setSavedCards}
      />
      <section className="saved-news__news-section">
        <NewsCardList
          isLoggedIn={props.isLoggedIn}
          currentRoute={props.currentRoute}
          cards={props.savedCards}
          setSavedCards={props.setSavedCards}
        />
      </section>
    </div>
  );
}
