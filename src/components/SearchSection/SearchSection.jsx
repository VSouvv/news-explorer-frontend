import "./SearchSection.css";

export default function SearchSection(props) {
  return (
    <section className="page__section search-section">
      <div className="search-section__content">
        <h1 className="search-section__title">What's going on in the world?</h1>
        <p className="search-section__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-section__form">
          <div className="search-section__search-bar">
            <input
              type="text"
              className="search-section__input"
              placeholder="Enter Topic"
            ></input>
            <button type="submit" className="search-section__submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
