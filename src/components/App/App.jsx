import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import DateCalculator from "../../utils/DateCalculator";
import NewsApi from "../../utils/NewsApi";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import SignUpSuccessPopup from "../SignUpSuccessPopup/SignUpSuccessPopup";
import HeaderPopup from "../HeaderPopup/HeaderPopup";

function App() {
  const DateCalc = new DateCalculator();
  const News = new NewsApi();

  let navigate = useNavigate();
  const [savedCards, setSavedCards] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [hasSearched, setHasSearched] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "Carver",
    email: "example-email.com",
    _id: "12345",
  });
  const [currentRoute, setCurrentRoute] = React.useState("Home");
  const [activeModal, setActiveModal] = React.useState("");

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const [displayAmount, setDisplayAmount] = React.useState(3);
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([{}, {}]);

  const onSearch = (evt) => {
    evt.preventDefault();
    setDisplayAmount(3);
    if (searchInput !== "") {
      setIsSearching(true);
      console.log(searchInput);
      News.searchNews({
        search: searchInput,
        fromDate: DateCalc.getPastDate(7),
        currentDate: DateCalc.getCurrentDate(),
      })
        .then((res) => {
          console.log(res);
          setSearchResults(res.articles);
          setHasSearched(true);
          setIsSearching(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setIsSearching(false);
      setHasSearched(false);
    }
  };

  const handleSignIn = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(true);
    handleCloseModal();
  };

  const handleNavigateSaved = (evt) => {
    setCurrentRoute("Saved");
    navigate("/saved-news");
  };
  const handleNavigateHome = (evt) => {
    setCurrentRoute("Home");
    navigate("/");
  };

  const handleLogOut = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(false);
    handleNavigateHome();
  };

  React.useEffect(() => {
    if (activeModal === "") {
      return;
    }

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickClose = (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__close")
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [activeModal]);

  React.useEffect(() => {}, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Header
        isLoggedIn={isLoggedIn}
        currentRoute={currentRoute}
        activeTab={currentRoute}
        setCurrentRoute={setCurrentRoute}
        activeModal={activeModal}
        openModal={handleOpenModal}
        handleLogOut={handleLogOut}
        handleNavigateSaved={handleNavigateSaved}
        handleNavigateHome={handleNavigateHome}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              hasSearched={hasSearched}
              currentRoute={currentRoute}
              onSearch={onSearch}
              isSearching={isSearching}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchResults={searchResults}
              displayAmount={displayAmount}
              setDisplayAmount={setDisplayAmount}
              savedCards={savedCards}
              setSavedCards={setSavedCards}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              isLoggedIn={isLoggedIn}
              currentRoute={currentRoute}
              setCurrentRoute={setCurrentRoute}
              savedCards={savedCards}
              setSavedCards={setSavedCards}
            />
          }
        />
      </Routes>
      <Footer handleNavigateHome={handleNavigateHome} />
      <SignUpSuccessPopup activeModal={activeModal} />
      <SignInPopup
        activeModal={activeModal}
        swapModal={() => {
          handleOpenModal("sign-up");
        }}
        handleSignIn={handleSignIn}
      />
      <SignUpPopup
        activeModal={activeModal}
        swapModal={() => {
          handleOpenModal("sign-in");
        }}
      />
      <HeaderPopup
        activeModal={activeModal}
        openModal={handleOpenModal}
        isLoggedIn={isLoggedIn}
        currentRoute={currentRoute}
        handleNavigateSaved={handleNavigateSaved}
        handleLogOut={handleLogOut}
        handleNavigateHome={handleNavigateHome}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
