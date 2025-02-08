import "./About.css";
import AuthorImage from "../../images/about-me.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img src={AuthorImage} className="about__image" alt="Author" />
        <div className="about__text">
          <h1 className="about__author">About The Author</h1>
          <p className="about__description">
            Hello, my name is Vista. I'm a new software engineer with knowledge
            in HTML, CSS, JavaScript, and React. I've always been intrigued with
            programming.
          </p>
          <p className="about__description">
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
};

export default About;
