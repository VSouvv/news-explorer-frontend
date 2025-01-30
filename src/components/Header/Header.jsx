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
        props.currentRoute === "Saved" && "header_header-theme_dark"
      } ${props.activeModal && "header_phone-hidden"} `}
    >
      {window.innerWidth > 540 ? (
        <>
          <div className="header__content">
            <h2
              className={`header__logo ${
                props.currentRoute === "Saved" && "header_theme_dark"
              }`}
            >
              NewsExplorer
            </h2>
            <div className="header__section">
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
            onClick={props.handleNavigateHome}
          >
            Home
          </button>
          {props.isLoggedIn ? (
            <>
              <button
                className={`header__text-button header__home ${
                  props.currentRoute === "Saved" && "header_theme_dark"
                } ${props.currentRoute === "Home" && "header__tab_active"}`}
                onClick={props.handleNavigateHome}
                onClick={props.handleNavigateSaved}
                className={`header__text-button header__saved ${
                  props.currentRoute === "Saved" &&
                  "header_theme_dark header__tab_active-dark"
                }`}
              >
                Home
                Saved articles
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
                      props.currentRoute === "Saved" &&
                      "header__profile_theme_dark"
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
                    ></button>
                  </div>
                </>
              ) : (
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
                  className={`header__sign-in ${
                  onClick={props.handleLogOut}
                  className={`header__profile-logout ${
                    props.currentRoute === "Saved" &&
                    "header__sign-in_theme_dark"
                    "header__profile-logout_theme_dark"
                  }`}
                  onClick={() => {
                    props.openModal("sign-in");
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`header__phone-content`}>
            <h2
              className={`header__logo header__logo_device_phone ${
                props.currentRoute === "Saved" && "header_theme_dark"
              }`}
            >
              NewsExplorer
            </h2>
                ></button>
              </div>
            </>
          ) : (
            <button
              className={`header__phone-menu ${
                props.currentRoute === "Saved" && "header__phone-menu_dark"
              className={`header__sign-in ${
                props.currentRoute === "Saved" && "header__sign-in_theme_dark"
              }`}
              type="button"
              onClick={() => {
                props.openModal("header");
                props.openModal("sign-in");
              }}
            ></button>
          </div>
        </>
      )}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <div className={`header__phone-content`}>
        <h2
          className={`header__logo header__logo_device_phone ${
            props.currentRoute === "Saved" && "header_theme_dark"
          }`}
        >
          NewsExplorer
        </h2>
        <button
          className={`header__phone-menu ${
            props.currentRoute === "Saved" && "header__phone-menu_dark"
          }`}
          type="button"
          onClick={() => {
            props.openModal("header");
          }}
        ></button>
      </div>
    </header>
  );
}