import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naitik Sharma </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />Being a Tech Enthusiast , currently pursuing my Bachaelors in
            Computer Science & Engineering in ACEIT ,Jaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Follow your heart and the rest will fall into place. The only true
            limitation is the one you set for yourself."{" "}
          </p>
          <footer className="blockquote-footer">Naitik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
