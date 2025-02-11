import React, { useState } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";

const projectsData = [
  {
    title: "TrackerMax",
    liveLink: "",
    liveLinkDescription: "",
    description: "A brief description of Project 1...",
    imageUrl: "../media/placeholder-image.png",
    skills: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    title: "Word Cloud",
    liveLink: "https://katherinj.github.io/DataVisualization/assignment4/",
    liveLinkDescription: "Live GitHub page",
    imageUrl: "../media/placeholder-image.png",
    description:
      "This Word Cloud Project involves creating a visual representation of textual data where the size of each word corresponds to its frequency or importance in the text",
    skills: ["React", "D3"],
  },
  {
    title: "TrackerMax",
    liveLink: "",
    liveLinkDescription: "",
    description: "A brief description of Project 1...",
    imageUrl: "../media/placeholder-image.png",
    skills: ["JavaScript", "React", "HTML", "CSS"],
  },
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
                <Card.Link href={project.liveLink}>
                  {project.liveLinkDescription}
                </Card.Link>
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
