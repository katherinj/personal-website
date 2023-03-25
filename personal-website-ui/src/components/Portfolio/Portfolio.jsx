import React, { useState } from "react";
import "./Portfolio.css";

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

  const projectCards = filteredProjects.map((project, index) => (
    <div key={index} className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>
        <strong>Skills: </strong>
        {project.skills.join(", ")}
      </p>
    </div>
  ));

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <input
        type="text"
        placeholder="Search by project name, skill, or language..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="project-list">{projectCards}</div>
    </div>
  );
}
