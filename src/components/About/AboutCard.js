import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a <span className="purple"> Front End </span>
            web developer, <span className="purple"> content </span> creator & an <span className="purple"> entrepreneur </span> proudly serving clients from the bustling streets of <span className="purple"> India's capital city </span>
            <br />
            <br />
            <br />
            My specialty is building <span className="purple"> user-friendly websites and E-commerce stores</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Building muscles in the gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything Is Always Impossible Until Someone Does It"{" "}
          </p>
          <footer className="blockquote-footer">Bruce Wayne</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
