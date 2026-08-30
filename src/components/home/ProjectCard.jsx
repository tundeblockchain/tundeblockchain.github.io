import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ project }) => {
  const { name, description, github, liveUrl, image } = project;

  return (
    <Col lg={6} className="mb-4">
      <Card className="project-card h-100">
        {image && (
          <div className="project-card-image-wrapper">
            <Card.Img
              variant="top"
              src={image}
              alt={`${name} screenshot`}
              className="project-card-image"
            />
          </div>
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="project-card-title">{name}</Card.Title>
          <Card.Text className="project-card-description flex-grow-1">
            {description}
          </Card.Text>
          <div className="project-card-links">
            {github && github.length > 0 && (
              github.map((url, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm me-2 mb-2"
                >
                  <i className="fab fa-github me-1" />
                  {github.length > 1 ? `GitHub ${idx + 1}` : "GitHub"}
                </a>
              ))
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-sm mb-2"
              >
                <i className="fas fa-external-link-alt me-1" />
                Live Site
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
