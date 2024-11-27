import React from "react";

import "./SavedNews.css";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import placeHolderImg from "../../assets/card_placeholder.png";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SavedNews(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <div className=" page__section saved-news">
      <SavedNewsHeader currentUser={currentUser} />
      <NewsCardList
        isLoggedIn={props.isLoggedIn}
        currentRoute={props.currentRoute}
        cards={[
          {
            img: placeHolderImg,
            title: "Gracie has the best Birb",
            date: "November 24, 2024",
            body: "Gracie really has the best Birb named Soren, you need to see how cute she is",
            author: "WTWR",
            keyword: "Facts",
            id: "1789",
          },
          {
            img: placeHolderImg,
            title: "Gracie has the best Birlfriend Easily",
            date: "November 24, 2024",
            body: "Gracie really has the best Boyfriend Vincent, he is so amazing and wonderful and honestly just perfect for her. Gracie couldn't possibly image a better boyfriend because one just simply couldn't exist. She loves Vincent more than anything else in the entire world",
            author: "WTWR",
            keyword: "The Truth",
            id: "17898",
          },
        ]}
      />
    </div>
  );
}
