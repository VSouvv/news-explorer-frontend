import React from "react";

import "./Main.css";
import backgroundImg from "../../assets/search-background.png";
import tabletBackgroundImg from "../../assets/search-background-tablet.png";
import placeHolderImg from "../../assets/card_placeholder.png";
import { cards, noCards } from "../../constants/cards";
import SearchForm from "../SearchForm/SearchForm";
import SearchSection from "../SearchSection/SearchSection";
import About from "../About/About";

export default function Main(props) {
  const [backgroundImageSize, setBackgroundImageSize] =
    React.useState(backgroundImg);

  React.useEffect(() => {
    if (window.innerWidth <= 1000) {
      setBackgroundImageSize(tabletBackgroundImg);
    } else {
      setBackgroundImageSize(backgroundImg);
    }
  }, []);

  return (
    <main className="page__section main">
      <img className="main__background-img" src={backgroundImageSize} />
      <SearchForm onSearch={props.onSearch} />
      <SearchSection
        isLoggedIn={props.isLoggedIn}
        currentRoute={props.currentRoute}
        cards={cards}
        hasSearched={props.hasSearched}
        isSearching={props.isSearching}
      />
      <About />
    </main>
  );
}
