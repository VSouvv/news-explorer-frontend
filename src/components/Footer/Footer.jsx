import "./Footer.css";
import gitImg from "../../assets/Git.svg";
import facebookImg from "../../assets/Facebook.svg";

export default function Footer(props) {
  return (
    <footer className=" page__section footer">
      <div className="footer_layout_desktop">
        <p className="footer__text">© 2024 Supersite, Powered by News API</p>
        <div className="footer__section">
          <button
            className="text-button footer__home"
            type="button"
            onClick={props.handleNavigateHome}
          >
            Home
          </button>
          <a
            className="text-button footer__tt"
            href="https://tripleten.com"
            target="_blank"
          >
            TripleTen
          </a>
          <a
            className="footer__git"
            href="https://github.com/VSouvv/news-explorer-frontend"
            target="_blank"
          >
            <img className="footer__button-img" src={gitImg} alt="git hub" />
          </a>
          <a
            className="footer__facebook"
            href="https://facebook.com"
            target="_blank"
          >
            <img
              className="footer__button-img"
              src={facebookImg}
              alt="facebook"
            />
          </a>
        </div>
      </div>
      <div className="footer_layout_phone">
        <div className="footer__row">
          <button className="text-button footer__home" type="button">
            Home
          </button>
          <div className="footer__section">
            <a
              className="footer__git"
              href="https://github.com/VSouvv/news-explorer-frontend"
            >
              <img className="footer__button-img" src={gitImg} alt="git hub" />
            </a>
            <a className="footer__facebook" href="https://facebook.com">
              <img
                className="footer__button-img"
                src={facebookImg}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <button className="text-button footer__tt" type="button">
          TripleTen
        </button>
        <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      </div>
    </footer>
  );
}
