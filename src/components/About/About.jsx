import "./About.css";
import Author from "../../assets/about-me.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img src={Author} alt="author" className="about__author-profile" />
        <div className="about__author-info">
          <h2 className="about__author-title">About the author</h2>
          <p className="about__author-caption">
            Hello, my name is Vista. I'm a new software engineer with knowledge
            in HTML, CSS, JavaScript, and React. I've always been intrigued with
            programming.
          </p>
          <p className="about__author-caption">
            I have taken TripleTen's Software Engineer course, which was exactly
            what I needed to turn my love for programming into a proper skillset
            and to become a professional software engineer. I now possess the
            capabilities to turn anyone's ideas or design into a fully
            functional website, front end and back end, working with them to get
            down exactly what they want.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
