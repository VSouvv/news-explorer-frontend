import "./About.css";
import aboutImg from "../../assets/avatar_temp.png";

export default function About(props) {
  return (
    <section className="page__section about">
      <div className="about__content">
        <img className="about__image" src={aboutImg} />
        <div className="about__text-content">
          <h3 className="about__title">About the author</h3>
          <p className="about__text">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            <br />
            <br />
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}
