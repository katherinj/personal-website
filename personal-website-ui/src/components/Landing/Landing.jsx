import * as React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-info">
        <div className="landing-text">
          <h1 className="landing-title"> Katherin </h1>
          <h3 className="landing-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h3>
        </div>
        <div className="landing-btn-container">
          <Link to="/portfolio">
            <button className="portfolio-btn landing-btn" title="Portfolio">
              Portfolio
            </button>
          </Link>
          <a
            href="https://www.linkedin.com/in/katherin-jimenez-2a7876220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="linkedin-btn social landing-btn"
              title="LinkedIn Profile"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </a>
          <a
            href="https://github.com/katherinj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="github-btn social landing-btn"
              title="GitHub Repositories"
            >
              <i class="fa-brands fa-github"></i>
            </button>
          </a>
          <Link to="/contact">
            <button className="contact-btn landing-btn" title="Contact Me">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      <div className="landing-image">
        <div className="landing-image-container">
          <img
            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
