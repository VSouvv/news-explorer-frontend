import "./Navigation.css";
import HomeLogoutIcon from "../../assets/logout.svg";
import SaveNewsLogoutIcon from "../../assets/logout_dark.svg";
import HmenuIcon from "../../assets/homeMenu.svg";
import SmenuIcon from "../../assets/savedMenu.svg";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MobileMenu from "../MobileMenu/MobileMenu";

function Nav({ handleSignInClick, isLoggedIn, onLogOut, activeModal }) {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isSavedNewsPage = location.pathname === "/saved-news";
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setActiveItem(isHomePage ? "home" : isSavedNewsPage ? "saved" : "");
  }, [location.pathname]);

  const handleSignInAndCloseMenu = () => {
    setIsMenuOpen(false);
    handleSignInClick();
  };

  return (
    <nav className="nav">
      <div
        className={`nav__container ${
          activeItem === "saved"
            ? "nav__container--theme-black nav__container--black-text"
            : "nav__container--theme-white"
        }`}
      >
        <ul className="nav__list">
          <li
            className={`nav__item nav__item--logo ${
              activeModal ? "nav__item--hidden" : ""
            }`}
          >
            <Link to="/" className="nav__link">
              NewsExplorer
            </Link>
          </li>

          <li
            className={`nav__item nav__item--home ${
              isSavedNewsPage ? "nav__item--hover" : ""
            }`}
          >
            <Link
              to="/"
              className={`nav__link ${
                activeItem === "home" ? "nav__link--active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li
                className={`nav__item nav__item--saved ${
                  isHomePage ? "nav__item--hover" : ""
                }`}
              >
                <Link
                  to="/saved-news"
                  className={`nav__link ${
                    activeItem === "saved" ? "nav__link--active" : ""
                  }`}
                >
                  Saved articles
                </Link>
              </li>
              <li className="nav__item nav__item--logout">
                <button className="nav__logout" onClick={onLogOut}>
                  <span className="nav__user-name">
                    {currentUser?.name}Vista
                  </span>
                  <img
                    src={
                      activeItem === "saved"
                        ? SaveNewsLogoutIcon
                        : HomeLogoutIcon
                    }
                    alt="logout icon"
                    className="nav__logout-icon"
                  />
                </button>
              </li>
            </>
          ) : (
            <li className="nav__item nav__item--auth">
              <button
                className="nav__signin"
                onClick={handleSignInAndCloseMenu}
              >
                Sign in
              </button>
            </li>
          )}

          <li
            className={`nav__item nav__item--menu ${
              activeModal ? "nav__item--hidden" : ""
            }`}
          >
            <button
              className="nav__menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <img
                src={activeItem === "saved" ? SmenuIcon : HmenuIcon}
                alt="menu icon"
                className="nav__menu-icon"
              />
            </button>
          </li>
        </ul>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isLoggedIn={isLoggedIn}
        onLogOut={onLogOut}
        onSignInClick={handleSignInClick}
        logoutIcon={HomeLogoutIcon}
        isHomePage={isHomePage}
      />
    </nav>
  );
}
export default Nav;
