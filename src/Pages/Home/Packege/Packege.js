import React from "react";
import { Button, Card } from "react-bootstrap";

const Packege = ({ packege }) => {
  return (
    <div className="mb-2">
      <Card>
        <Card.Img variant="top" style={{ width: "100%" }} src={packege.photo} />
        <Card.Body>
          <Card.Text>
            <h2>{packege.title}</h2>
          </Card.Text>
          <p>{packege.description}</p>
          <Card.Text></Card.Text>
          <Button variant="primary">Primary</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Packege;
