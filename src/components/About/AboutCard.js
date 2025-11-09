import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

// Define activities as an array for reusability
const activities = ["Gym", "Exploring New Adventures"];

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="highlight">Palash Sahu</span>{" "}
            from <span className="highlight">Bangalore, India</span>.
            <br />
            <br></br>
            I Recently completed my Post Graduation in Computer Applications and
            have a strong passion for Full Stack Development.
            <br />
            <br></br>
            I have completed a Master of Computer Applications (MCA).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul role="list">
            {activities.map((activity, index) => (
              <li key={index} className="about-activity">
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p className="quote-text">"Be Fearless in Pursuit of Happiness"</p>
          <footer className="blockquote-footer">Palash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
