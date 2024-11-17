import React, { useState } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";

const projectsData = [
  {
    title: "TrackerMax",
    description: "A brief description of Project 1...",
    imageUrl: "https://via.placeholder.com/200",
    skills: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2...",
    imageUrl: "https://via.placeholder.com/200",
    skills: ["Java", "Spring Boot", "MySQL"],
  },
  // Add more projects...
];

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const projectData = [
      project.title.toLowerCase(),
      ...project.skills.map((skill) => skill.toLowerCase()),
    ];

    return searchTerms.every((term) =>
      projectData.some((data) => data.includes(term))
    );
  });

  return (
    <Container className="portfolio">
      <h1 className="text-center my-4">My Portfolio</h1>

      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by project name, skill or language..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <Row xs={1} sm={2} md={3} className="g-4">
        {filteredProjects.map((project, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={project.imageUrl}
                alt={project.title}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <strong>Skills: </strong>
                  {project.skills.join(", ")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
