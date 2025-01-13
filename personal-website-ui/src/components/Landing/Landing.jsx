import * as React from "react";
import { Container, Button } from "react-bootstrap";
import "./Landing.css";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <section className="bg-light py-5 text-center">
      <Container>
        <img
          src="../media/landing-page-profile-pic.jpeg"
          className="profile-img"
        />
        <h1 className="display-4 fw-bold">Welcome to Katherin.io</h1>
        <p className="lead">Software Engineer</p>
        <Link to="/about">
          <Button variant="primary" size="lg" className="mt-3">
            Learn More
          </Button>
        </Link>
      </Container>
    </section>
  );
}
