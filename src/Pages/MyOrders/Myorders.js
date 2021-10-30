import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Button } from "react-bootstrap";
const Myorders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  const [myAllOrders, setMyAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://ancient-sierra-47669.herokuapp.com/bookedPackages")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  useEffect(() => {
    const myOrders = allOrders.filter(
      (myorder) => myorder.customerEmail == user?.email
    );
    setMyAllOrders(myOrders);
  }, [allOrders]);
  console.log(myAllOrders);
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center title-styel">
        <div>
          <h1 className="title-styel text-center text-success mt-4">
            You Total Booked {myAllOrders.length} Tour Packages
          </h1>
        </div>
      </div>
      <Row xs={1} md={2} className="g-4 my-2">
        {myAllOrders.map((myOrders) => (
          <Col>
            <Card style={{ height: "370px" }}>
              <Card.Img
                variant="top"
                style={{ height: "190px" }}
                src={myOrders.bookedPackage.photo}
              />
              <Card.Body>
                <Card.Title>{myOrders.bookedPackage.title}</Card.Title>
                <Card.Text>
                  <p>
                    <small> Date: </small>
                    {myOrders.date}
                  </p>
                </Card.Text>
                <Card.Text>
                  <p>
                    <small>Price: </small>
                    {myOrders.bookedPackage.price}
                  </p>
                </Card.Text>

                <Button
                  //   onClick={() => handleDelete(myOrders._id)}
                  className="fw-bold"
                  variant="danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Myorders;
