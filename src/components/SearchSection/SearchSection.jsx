import "./SearchSection.css";
import notFound from "../../assets/not-found.svg";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

export default function SearchSection(props) {
  return (
    <section
      className={`search-section ${
        !props.isSearching && !props.hasSearched && "search-section_hidden"
      }`}
    >
      {props.isSearching ? (
        <>
          <Preloader />
          <p className="search-section__searching">Searching for news...</p>
        </>
      ) : props.hasSearched ? (
        props.cards.length === 0 ? (
          <>
            <img className="search-section__nothing-img" src={notFound} />
            <h4 className="search-section__nothing-title">Nothing Found</h4>
            <p className="search-section__nothing-description">
              Sorry, but nothing matched your search terms.
            </p>
          </>
        ) : (
          <>
            <h3 className="search-section__title">Search results</h3>
            <NewsCardList
              isLoggedIn={props.isLoggedIn}
              currentRoute={props.currentRoute}
              cards={props.cards}
            />
            <button className="search-section__show-more">Show More</button>
          </>
        )
      ) : (
        ""
      )}
    </section>
  );
}
