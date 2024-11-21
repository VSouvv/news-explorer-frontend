import "./Header.css";
export default function Header(props) {
  return (
    <header className=" page__section header">
      <div className="header__content">
        <h2 className="header__logo">NewsExplorer</h2>
        <div className="header__section">
          <button className="text-button header__home header__home_active">
            Home
          </button>
          <button className="header__sign-in">Sign In</button>
        </div>
      </div>
    </header>
  );
}
