import "./Main.css";
import backgroundImg from "../../assets/search-background.png";

import SearchSection from "../SearchSection/SearchSection";
import About from "../About/About";

export default function Main(props) {
  return (
    <main className="page__section main">
      <img className="main__background-img" src={backgroundImg} />
      <SearchSection />
      <About />
    </main>
  );
}
