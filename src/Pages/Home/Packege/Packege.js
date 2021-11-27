import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Package.css";

const Packege = ({ packege }) => {
  return (
    <div className="mb-2">
      <div className="col-md-12 card-style">
        <Card>
          <div className="row">
            <div className=" col-md-6 d-flex align-items-center justify-content-center ">
              <Card.Img
                variant="top"
                style={{ width: "100%", height: "100%" }}
                src={packege.photo}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center ">
              <Card.Body>
                <Card.Text>
                  <h3 className="title-color">{packege.title}</h3>
                </Card.Text>
                <p>{packege.description}</p>
                <Card.Text></Card.Text>
                <Link to={`packageDetails/${packege._id}`}>
                  <Button
                    variant
                    className="button-bg text-white fw-bold mb-auto"
                  >
                    Booking Tour
                  </Button>
                </Link>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Packege;
