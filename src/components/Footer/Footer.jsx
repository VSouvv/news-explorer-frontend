import "./Footer.css";
import gitImg from "../../assets/Git.svg";
import facebookImg from "../../assets/Facebook.svg";

export default function Footer(props) {
  return (
    <footer className=" page__section footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__section">
        <button className="text-button footer__home" type="button">
          Home
        </button>
        <button className="text-button footer__tt" type="button">
          TripleTen
        </button>
        <a
          className="footer__git"
          href="https://github.com/VSouvv/news-explorer-frontend"
        >
          <img className="footer__button-img" src={gitImg} />
        </a>
        <a className="footer__facebook" href="https://facebook.com">
          <img className="footer__button-img" src={facebookImg} />
        </a>
      </div>
    </footer>
  );
}
