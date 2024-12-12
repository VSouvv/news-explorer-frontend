import React from "react";

import "./Main.css";
import backgroundImg from "../../assets/search-background.png";
import tabletBackgroundImg from "../../assets/search-background-tablet.png";
import phoneBackgroundImg from "../../assets/search-background-phone.png";
import { cards, noCards } from "../../constants/cards";
import SearchForm from "../SearchForm/SearchForm";
import SearchSection from "../SearchSection/SearchSection";
import About from "../About/About";

export default function Main(props) {
  const [backgroundImageSize, setBackgroundImageSize] =
    React.useState(backgroundImg);

  React.useEffect(() => {
    if (window.innerWidth > 1000) {
      setBackgroundImageSize(backgroundImg);
    } else if (window.innerWidth > 600) {
      setBackgroundImageSize(tabletBackgroundImg);
    } else {
      setBackgroundImageSize(phoneBackgroundImg);
    }
  }, []);

  return (
    <main className="page__section main">
      <img className="main__background-img" src={backgroundImageSize} alt="" />
      <SearchForm
        onSearch={props.onSearch}
        hasSearched={props.hasSearched}
        isSearching={props.isSearching}
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
      />
      <SearchSection
        isLoggedIn={props.isLoggedIn}
        currentRoute={props.currentRoute}
        cards={props.searchResults}
        hasSearched={props.hasSearched}
        isSearching={props.isSearching}
        displayAmount={props.displayAmount}
        setDisplayAmount={props.setDisplayAmount}
      />
      <About />
    </main>
  );
}
