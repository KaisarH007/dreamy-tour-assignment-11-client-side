import React from "react";
import { Card, Col } from "react-bootstrap";

const AllOrders = ({ orderdPackage }) => {
  const { customerName, customerEmail } = orderdPackage;
  const { title, photo, _id } = orderdPackage.bookedPackage;

  return (
    <div>
      {/* <Col>
        <Card style={{ height: "360px" }}>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <p>
                <small> Name : </small>
                {customerName}
              </p>
            </Card.Text>
            <Card.Text>
              <p>
                <small>ID : </small>
                {_id}
              </p>
            </Card.Text>
            <Card.Text>
              <p>
                <small>Email : </small> {customerEmail}
              </p>
            </Card.Text>
            <Button
              // onClick={() => handleDelete(_id)}
              className="fw-bold"
              variant="danger"
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col> */}
    </div>
  );
};

export default AllOrders;
