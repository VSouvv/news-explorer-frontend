import React from "react";

import logoutLight from "../../assets/logout.svg";
import logoutDark from "../../assets/logout_dark.svg";
import "./Header.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Header(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <header
      className={`page__section header ${
        props.useDarkTheme && "header_theme_dark"
      }`}
    >
      <div className="header__content">
        <h2
          className={`header__logo ${
            props.useDarkTheme && "header_theme_dark"
          }`}
        >
          NewsExplorer
        </h2>
        <div className="header__section">
          <button
            className={`header__text-button header__home ${
              props.useDarkTheme && "header_theme_dark"
            } ${
              props.activeTab === "Home"
                ? props.useDarkTheme
                  ? "header__tab_active-dark"
                  : "header__tab_active"
                : ""
            }`}
          >
            Home
          </button>
          {props.isLoggedIn ? (
            <>
              <button
                className={`header__text-button header__saved ${
                  props.useDarkTheme && "header_theme_dark"
                } ${
                  props.activeTab === "Saved"
                    ? props.useDarkTheme
                      ? "header__tab_active-dark"
                      : "header__tab_active"
                    : ""
                }`}
              >
                Saved articles
              </button>
              <div
                className={`header__profile ${
                  props.useDarkTheme && "header__profile_theme_dark"
                }`}
              >
                <p
                  className={`header__profile-name ${
                    props.useDarkTheme && "header_theme_dark"
                  }`}
                >
                  {currentUser.name}
                </p>
                <button
                  className={`header__profile-logout ${
                    props.useDarkTheme && "header__profile-logout_theme_dark"
                  }`}
                  src={props.useDarkTheme ? logoutDark : logoutLight}
                ></button>
              </div>
            </>
          ) : (
            <button
              className={`header__sign-in ${
                props.useDarkTheme && "header__sign-in_theme_dark"
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
