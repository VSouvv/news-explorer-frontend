import React from "react";
import { Link } from "react-router-dom";

import logoutLight from "../../assets/logout.svg";
import logoutDark from "../../assets/logout_dark.svg";
import "./Header.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Header(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <header
      className={`page__section header ${
        props.currentRoute === "Saved" && "header_theme_dark"
      }`}
    >
      <div className="header__content">
        <h2
          className={`header__logo ${
            props.currentRoute === "Saved" && "header_theme_dark"
          }`}
        >
          NewsExplorer
        </h2>
        <div className="header__section">
          <button
            className={`header__text-button header__home ${
              props.currentRoute === "Saved" && "header_theme_dark"
            } ${props.currentRoute === "Home" && "header__tab_active"}`}
          >
            Home
          </button>
          {props.isLoggedIn ? (
            <>
              <button
                onClick={props.handleNavigateSaved}
                className={`header__text-button header__saved ${
                  props.currentRoute === "Saved" &&
                  "header_theme_dark header__tab_active-dark"
                }`}
              >
                Saved articles
              </button>
              <div
                className={`header__profile ${
                  props.currentRoute === "Saved" && "header__profile_theme_dark"
                }`}
              >
                <p
                  className={`header__profile-name ${
                    props.currentRoute === "Saved" && "header_theme_dark"
                  }`}
                >
                  {currentUser.name}
                </p>
                <button
                  onClick={props.handleLogOut}
                  className={`header__profile-logout ${
                    props.currentRoute === "Saved" &&
                    "header__profile-logout_theme_dark"
                  }`}
                  src={
                    props.currentRoute === "Saved" ? logoutDark : logoutLight
                  }
                ></button>
              </div>
            </>
          ) : (
            <button
              className={`header__sign-in ${
                props.currentRoute === "Saved" && "header__sign-in_theme_dark"
              }`}
              onClick={props.openSignInModal}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
