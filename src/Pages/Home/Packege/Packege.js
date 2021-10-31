import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Packege = ({ packege }) => {
  return (
    <div className="mb-2">
      <div className="col-md-12">
        <Card>
          <Card.Img
            variant="top"
            style={{ width: "100%" }}
            src={packege.photo}
          />
          <Card.Body>
            <Card.Text>
              <h2>{packege.title}</h2>
            </Card.Text>
            <p>{packege.description}</p>
            <Card.Text></Card.Text>
            <Link to={`packageDetails/${packege._id}`}>
              <Button variant className="button-bg text-white fw-bold">
                Booking Tour
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Packege;
