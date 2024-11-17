import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    /* will handle later on */
  };

  return (
    <Container className="lets-connect py-5">
      <h1 className="text-center mb-4">Let's Connect!</h1>

      <Row className="justify-content-center mb-5">
        <Col xs={12} md={6} className="text-center">
          <p className="lead">
            Feel free to reach out via any of the platforms below:
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://www.linkedin.com/in/katherin-jimenez-2a7876220/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/katherinj?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="mailto:katherinmjimenezp@gmail.com"
              className="social-link"
            >
              <FaEnvelope size={40} />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message here..."
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
