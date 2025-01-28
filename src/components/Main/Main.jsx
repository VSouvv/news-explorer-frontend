import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import SearchSection from "../SearchSection/SearchSection";
import About from "../About/About";

export default function Main(props) {
  return (
    <main className="page__section main">
      <div className="main__background-img"></div>
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
