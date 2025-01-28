import "./About.css";
import aboutImg from "../../assets/about-me.png";

export default function About(props) {
  return (
    <section className="page__section about">
      <div className="about__content">
        <img className="about__image" src={aboutImg} alt="Website Author" />
        <div className="about__text-content">
          <h3 className="about__title">About the author</h3>
          <p className="about__text">
            Hello, my name is Vista. I'm a new software engineer with knowledge
            in HTML, CSS, JavaScript, and React. I've always been intrigued with
            programming.
          </p>
          <p className="about__text">
            I have taken TripleTen's Software Engineer course, which was exactly
            what I needed to turn my love for programming into a proper skillset
            and to become a professional software engineer. I now possess the
            capabilities to turn anyone's ideas or design into a fully
            functional website, front end and back end, working with them to get
            down exactly what they want.
          </p>
        </div>
      </div>
    </section>
  );
}
