import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import SignUpSuccessPopup from "../SignUpSuccessPopup/SignUpSuccessPopup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [hasSearched, setHasSearched] = React.useState(false);
  const [useDarkTheme, setUseDarkTheme] = React.useState(false);
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

  const onSearch = (evt) => {
    evt.preventDefault();
    setHasSearched(true);
    //Search with API
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

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Header
        isLoggedIn={isLoggedIn}
        useDarkTheme={useDarkTheme}
        activeTab={currentRoute}
        setCurrentRoute={setCurrentRoute}
        openSignInModal={() => {
          handleOpenModal("sign-in");
        }}
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
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews isLoggedIn={isLoggedIn} currentRoute={currentRoute} />
          }
        />
      </Routes>
      <Footer />
      <SignUpSuccessPopup activeModal={activeModal} />
      <SignInPopup
        activeModal={activeModal}
        swapModal={() => {
          handleOpenModal("sign-up");
        }}
      />
      <SignUpPopup
        activeModal={activeModal}
        swapModal={() => {
          handleOpenModal("sign-in");
        }}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
