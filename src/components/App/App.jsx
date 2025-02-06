import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { fetchNews, saveArticle } from "../../utils/newsApi";
import SavedNews from "../SavedNews/SavedNews";
import SignIn from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import * as auth from "../../utils/auth";
import { setToken } from "../../utils/token";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Opens Sign In modal
  const handleSignInClick = () => {
    setActiveModal("signin");
  };

  // Opens Sign Up modal
  const handleSignUpClick = () => {
    setActiveModal("signup");
  };

  // Closes any active modal
  const closeActiveModal = () => {
    setActiveModal(null);
  };

  // Handles user sign-in
  const handleSignIn = async ({ email, password }) => {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      return Promise.reject(new Error("Email and password are required"));
    }
    try {
      const data = await auth.authorize(email, password);
      setToken(data.token);
      setIsLoggedIn(true);
      closeActiveModal();
      navigate("/saved-news");
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Handles user sign-up
  const handleSignUp = async ({ email, password, username }) => {
    setLoading(true);
    try {
      const userData = await auth.register(email, password, username);
      if (userData) {
        handleSignIn({ email, password }); // Auto-login after sign-up
      }
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Logs user out
  const handleLogOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  // Handles article search
  const handleSearch = async (keyword) => {
    setLoading(true);
    setSearchTerm(keyword);
    localStorage.setItem("lastSearchTerm", keyword);

    try {
      const fetchArticles = await fetchNews(keyword);
      if (fetchArticles.length === 0) {
        setArticles([]);
        localStorage.setItem("lastSearchArticles", JSON.stringify([]));
      } else {
        const articlesWithKeyword = fetchArticles.map((article) => ({
          ...article,
          keyword,
        }));
        setArticles(articlesWithKeyword);
        localStorage.setItem(
          "lastSearchArticles",
          JSON.stringify(articlesWithKeyword)
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Saves an article
  const saveArticles = async (article) => {
    try {
      const savedArticle = await saveArticle(article);
      const updatedSavedArticles = [...savedArticles, savedArticle];
      setSavedArticles(updatedSavedArticles);
      localStorage.setItem(
        "savedArticles",
        JSON.stringify(updatedSavedArticles)
      );

      const relatedKeyword = savedArticle.keyword;
      if (!keywords.includes(relatedKeyword)) {
        const updatedKeywords = [...keywords, relatedKeyword];
        setKeywords(updatedKeywords);
        localStorage.setItem(
          "searchedKeywords",
          JSON.stringify(updatedKeywords)
        );
      }
    } catch (error) {
      console.error("Failed saving article:", error);
    }
  };

  // Removes an article
  const removeArticle = (article) => {
    const updatedSavedArticles = savedArticles.filter(
      (a) => a.url !== article.url
    );
    setSavedArticles(updatedSavedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));

    const relatedKeyword = article.keyword;
    const remainingArticlesWithKeyword = updatedSavedArticles.filter(
      (a) => a.keyword === relatedKeyword
    );
    if (remainingArticlesWithKeyword.length === 0) {
      const remainingKeywords = keywords.filter((kw) => kw !== relatedKeyword);
      setKeywords(remainingKeywords);
      localStorage.setItem(
        "searchedKeywords",
        JSON.stringify(remainingKeywords)
      );
    }
  };

  // Restores last search from localStorage
  useEffect(() => {
    const lastSearchTerm = localStorage.getItem("lastSearchTerm");
    const storedArticles =
      JSON.parse(localStorage.getItem("lastSearchArticles")) || [];

    if (lastSearchTerm && isHomePage && !searchTerm) {
      setSearchTerm(lastSearchTerm);
      setArticles(storedArticles);
    } else if (!isHomePage) {
      setSearchTerm("");
      setArticles([]);
    }
  }, [isHomePage, searchTerm]);

  // Restores saved articles and keywords
  useEffect(() => {
    const storedKeywords =
      JSON.parse(localStorage.getItem("searchedKeywords")) || [];
    const storedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setKeywords(storedKeywords);
    setSavedArticles(storedArticles);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__content">
          <div
            className={`app__search ${
              isHomePage ? "app__search--with-bg" : ""
            }`}
          >
            <Nav
              onLogOut={handleLogOut}
              handleSignInClick={handleSignInClick}
              isLoggedIn={isLoggedIn}
              activeModal={activeModal}
            />
            {isHomePage && (
              <Header setSearchTerm={setSearchTerm} onSearch={handleSearch} />
            )}
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  articles={articles}
                  onSaveArticle={saveArticles}
                  savedArticles={savedArticles}
                  onRemoveArticle={removeArticle}
                  loading={loading}
                  isLoggedIn={isLoggedIn}
                  searchTerm={searchTerm}
                  onSignInClick={handleSignInClick}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    savedArticles={savedArticles}
                    onRemoveArticle={removeArticle}
                    keywords={keywords}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          {isHomePage && <About />}
          <Footer />
        </div>
        <SignIn
          isOpen={activeModal === "signin"}
          onClose={closeActiveModal}
          onSignUpClick={handleSignUpClick}
          handleSignIn={handleSignIn}
        />
        <SignUpPopup
          isOpen={activeModal === "signup"}
          onClose={closeActiveModal}
          onSignInClick={handleSignInClick}
          onSignUp={handleSignUp}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
