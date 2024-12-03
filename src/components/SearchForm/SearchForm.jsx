import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <section className="page__section search-form">
      <div className="search-form__content">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-form__form" onSubmit={props.onSearch}>
          <div className="search-form__search-bar">
            <input
              type="text"
              className="search-form__input"
              placeholder="Enter Topic"
            ></input>
            <button type="submit" className="search-form__submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
