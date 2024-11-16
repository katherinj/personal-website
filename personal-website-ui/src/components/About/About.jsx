import * as React from "react";
import { useState } from "react";
import "./About.css";

export default function About() {
  const [showNetflixExperience, setShowNetflixExperience] = useState(false);
  const [showWorkdayExperience, setShowWorkdayExperience] = useState(false);
  const [showPharmacyExperience, setShowPharmacyExperience] = useState(false);
  const [showNJIT, setShowNJIT] = useState(false);
  const [showMCCC, setShowMCCC] = useState(false);

  const toggleNetflixExperience = () => {
    setShowNetflixExperience(!showNetflixExperience);
  };

  const toggleWorkdayExperience = () => {
    setShowWorkdayExperience(!showWorkdayExperience);
  };

  const togglePharmacyExperience = () => {
    setShowPharmacyExperience(!showPharmacyExperience);
  };

  const toggleNJIT = () => {
    setShowNJIT(!showNJIT);
  };

  const toggleMCCC = () => {
    setShowMCCC(!showMCCC);
  };

  return (
    <div id="about-me">
      <h1 className="page-title">About Me</h1>
      <div className="about-me-content">
        <div className="about-me-background">
          <h3 className="title">Background</h3>
          <p>
            I'm a dedicated and passionate full-stack software developer,
            currently pursuing my Bachelor's degree in Computer Science at New
            Jersey Institute of Technology. I have experience in multiple
            programming languages and technologies, including Java, JavaScript,
            Python, C/C++, PostgreSQL, Spring Boot, HTML, CSS, React, Node,
            Express, and Git.
          </p>
        </div>
        <div className="about-me-skills">
          <h3 className="title">Skills</h3>
          <p classname="subtitle">
            Explore my skills and see the journey I've taken with each one!
          </p>
          <p className="instructions">
            Click on a skill to reveal my experiences, projects, and history
            with it.
          </p>
          <div>
            <button className="skill-button">Java</button>
            <button className="skill-button">JavaScript</button>
            <button className="skill-button">Python</button>
            <button className="skill-button">C/C++</button>
            <button className="skill-button">PostgreSQL</button>
            <button className="skill-button">Spring Boot</button>
            <button className="skill-button">HTML</button>
            <button className="skill-button">CSS</button>
            <button className="skill-button">React</button>
            <button className="skill-button">Node</button>
            <button className="skill-button">Express</button>
            <button className="skill-button">Git</button>
            <button className="skill-button">MySQL</button>
            <button className="skill-button">Bash</button>
            <button className="skill-button">Spring Boot</button>
            <button className="skill-button">Mockito</button>
            <button className="skill-button">JUnit</button>
          </div>
        </div>
        <div className="about-me-experiences">
          <h3 className="title">Previous Experiences</h3>
          <p classname="subtitle">Explore my past experiences</p>
          <p className="instructions">
            Click on an experience to learn more about my role and
            accomplishments
          </p>
          <ul>
            <li>
              <button
                className="experience-title"
                onClick={toggleNetflixExperience}
              >
                Netflix Pathways Bootcamp
              </button>
              {showNetflixExperience && (
                <div className="experience-details">
                  <p>
                    I participated in a 12-week immersive program at the Netflix
                    Pathways Bootcamp, focusing on advanced back-end development
                    skills and Java concepts. During the bootcamp, I gained
                    hands-on experience creating efficient Java applications and
                    microservices, using tools such as Spring Boot, SQL, and
                    AWS.
                  </p>
                </div>
              )}
            </li>
            <li>
              <button
                className="experience-title"
                onClick={toggleWorkdayExperience}
              >
                Workday x CodePath / Full Stack Software Development Intern
              </button>
              {showWorkdayExperience && (
                <div className="experience-details">
                  <p>
                    As a Full Stack Software Development Intern at Workday x
                    CodePath, I was one of 35 selected from 1,800 applicants for
                    a 10-week internship. I gained hands-on experience in
                    full-stack web development, including design, database,
                    back-end, front-end, testing, and deployment. I worked
                    alongside professional mentors from Workday’s software
                    engineering teams and developed an MVP using the PERN stack
                    and Agile methodology within five weeks.
                  </p>
                </div>
              )}
            </li>
            <li>
              <button
                className="experience-title"
                onClick={togglePharmacyExperience}
              >
                Walmart Pharmacy / Certified Pharmacy Technician
              </button>
              {showPharmacyExperience && (
                <div className="experience-details">
                  <p>
                    As a Certified Pharmacy Technician at Walmart Pharmacy, I
                    completed Connexus software training to access patient data,
                    insurance billing, drug selection, and prescription
                    interpretation. I also facilitated communication between
                    patients, doctors, and other pharmacies to ensure patient
                    safety and satisfaction.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="about-me-education">
          <h3 className="title">Education</h3>
          <p classname="subtitle">Explore my educational journey</p>
          <p className="instructions">
            Click on an institution to see relevant courses I've taken
          </p>
          <ul>
            <li>
              <button className="experience-title" onClick={toggleNJIT}>
                New Jersey Institute of Technology / B.S Computer Science
              </button>
              {showNJIT && (
                <div className="experience-details">
                  <p></p>
                </div>
              )}
            </li>
            <li>
              <button className="experience-title" onClick={toggleMCCC}>
                Mercer County Community College
              </button>
              {showMCCC && (
                <div className="experience-details">
                  <p>{/* ... education description ... */}</p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
