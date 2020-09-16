import React from "react";
import { Card } from "react-bootstrap";
export default function Dcard(props) {
  let { project } = props;
  return (
    <Card className="card-component shadow p-3 mb-4 bg-white rounded">
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {project.type}
        </Card.Subtitle>
        <Card.Text>{project.outlets_count}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
