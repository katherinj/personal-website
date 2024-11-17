import React from "react";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid id="about-me" className="py-5">
      <h1 className="text-center mb-4 page-title">About Me</h1>

      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Background</Card.Title>
              <Card.Text>
                I'm a dedicated and passionate full-stack software developer,
                currently pursuing my Bachelor's degree in Computer Science at
                New Jersey Institute of Technology. I have experience in
                multiple programming languages and technologies, including Java,
                JavaScript, Python, C/C++, PostgreSQL, Spring Boot, HTML, CSS,
                React, Node, Express, and Git.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text>
                Explore my skills and see the journey I've taken with each one!
              </Card.Text>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {[
                  "Java",
                  "JavaScript",
                  "Python",
                  "C/C++",
                  "PostgreSQL",
                  "Spring Boot",
                  "HTML",
                  "CSS",
                  "React",
                  "Node",
                  "Express",
                  "Git",
                  "MySQL",
                  "Bash",
                  "Mockito",
                  "JUnit",
                ].map((skill, index) => (
                  <Button key={index} variant="outline-primary" size="sm">
                    {skill}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Experiences Section */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Previous Experiences</Card.Title>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Netflix Pathways Bootcamp</Accordion.Header>
                  <Accordion.Body>
                    I participated in a 12-week immersive program at the Netflix
                    Pathways Bootcamp, focusing on advanced back-end development
                    skills and Java concepts. During the bootcamp, I gained
                    hands-on experience creating efficient Java applications and
                    microservices, using tools such as Spring Boot, SQL, and
                    AWS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Workday x CodePath / Full Stack Software Development Intern
                  </Accordion.Header>
                  <Accordion.Body>
                    As a Full Stack Software Development Intern at Workday x
                    CodePath, I was one of 35 selected from 1,800 applicants for
                    a 10-week internship. I gained hands-on experience in
                    full-stack web development, including design, database,
                    back-end, front-end, testing, and deployment. I worked
                    alongside professional mentors from Workday’s software
                    engineering teams and developed an MVP using the PERN stack
                    and Agile methodology within five weeks.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Walmart Pharmacy / Certified Pharmacy Technician
                  </Accordion.Header>
                  <Accordion.Body>
                    As a Certified Pharmacy Technician at Walmart Pharmacy, I
                    completed Connexus software training to access patient data,
                    insurance billing, drug selection, and prescription
                    interpretation. I also facilitated communication between
                    patients, doctors, and other pharmacies to ensure patient
                    safety and satisfaction.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    New Jersey Institute of Technology
                  </Accordion.Header>
                  <Accordion.Body>
                    Pursuing B.S. in Computer Science, with a focus on software
                    engineering, algorithms, and data structures.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Mercer County Community College
                  </Accordion.Header>
                  <Accordion.Body>
                    Earned Associate's Degree in Computer Science. Courses
                    included Programming Fundamentals, Calculus, and Database
                    Systems.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
