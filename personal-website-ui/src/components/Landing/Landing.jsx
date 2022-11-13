import * as React from "react";
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
          <button className="portfolio-btn" title="Portfolio">
            Portfolio
          </button>
          <a
            href="https://www.linkedin.com/in/katherin-jimenez-2a7876220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="linkedin-btn social" title="LinkedIn Profile">
              <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </a>
          <a
            href="https://github.com/katherinj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-btn social" title="GitHub Repositories">
              <i class="fa-brands fa-github"></i>
            </button>
          </a>
          <button className="contact-btn" title="Contact Me">
            Contact Me
          </button>
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
