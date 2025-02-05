import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";

function SavedNews({ savedArticles, onRemoveArticle, keywords }) {
  return (
    <div className="saved">
      <main className="saved__main">
        <SavedNewsHeader savedArticles={savedArticles} keywords={keywords} />
        <section className="saved__news-section">
          <ul className="saved__news-list">
            {savedArticles.map((item) => (
              <NewsCard
                key={item.url}
                item={item}
                onRemoveArticle={onRemoveArticle}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default SavedNews;
