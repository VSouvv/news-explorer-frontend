import React from "react";

import "./HeaderPopup.css";
import closeButton from "../../assets/close.svg";
import logout from "../../assets/logout.svg";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function HeaderPopup(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <div
      className={`modal header-modal modal_type_header ${
        props.activeModal === "header" && "header-modal_active"
      }`}
    >
      <div
        className={`header-modal__container ${
          props.activeModal === "header" && "header-modal__container_active"
        }`}
      >
        <div className="header-modal__header">
          <h2 className={`header__logo header__logo_device_phone`}>
            NewsExplorer
          </h2>
          <img className="modal__close header-modal__close" src={closeButton} />
          <img
            className="modal__close header-modal__close"
            src={closeButton}
            alt="close"
          />
        </div>
        <div className="header-modal__content">
          {props.isLoggedIn ? (
            <>
              <div className="header-modal__tabs">
                <button
                  className={`header-modal__text-button header-modal__home`}
                  onClick={props.handleNavigateHome}
                >
                  Home
                </button>
                <button
                  onClick={props.handleNavigateSaved}
                  className={`header-modal__text-button header-modal__saved`}
                >
                  Saved articles
                </button>
              </div>
              <div className={`header-modal__profile`}>
                <p className={`header-modal__profile-name`}>
                  {currentUser.name}
                </p>
                <button
                  onClick={props.handleLogOut}
                  className={`header-modal__profile-logout`}
                ></button>
              </div>
            </>
          ) : (
            <>
              <button
                className={`header-modal__text-button header-modal__home`}
                onClick={props.handleNavigateHome}
              >
                Home
              </button>
              <button
                className="header-modal__sign-in"
                onClick={() => {
                  props.openModal("sign-in");
                }}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
