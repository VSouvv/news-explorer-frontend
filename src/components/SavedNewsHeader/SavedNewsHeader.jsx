import "./SavedNewsHeader.css";

export default function SavedNewsHeader(props) {
  return (
    <section className="page__section saved-news-header">
      <p className="saved-news-header__subtitle">Saved articles</p>
      <h3 className="saved-news-header__title">
        Elise, you have 5 saved articles
      </h3>
      <p className="saved-news-header__keyword-list">
        {"By keywords: "}
        <span className="saved-news-header__keywords">
          {"Nature, Yellowstone, and 2 others"}
        </span>
      </p>
    </section>
  );
}
