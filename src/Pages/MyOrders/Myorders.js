import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Button } from "react-bootstrap";
const Myorders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  const [myAllOrders, setMyAllOrders] = useState([]);
  const [remainingAllOrders, setRemainingAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://ancient-sierra-47669.herokuapp.com/bookedPackages")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  useEffect(() => {
    const myOrders = allOrders.filter(
      (myorder) => myorder.customerEmail === user.email
    );
    setMyAllOrders(myOrders);
  }, [allOrders]);
  const handleDeleteOrder = (id) => {
    const response = window.confirm("Want to DELETE?");

    if (response === true) {
      const url = `https://ancient-sierra-47669.herokuapp.com/bookedPackages/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount) {
            const remainingMyOrder = myAllOrders.filter(
              (remainOrders) => remainOrders._id !== id
            );
            setMyAllOrders(remainingMyOrder);
          }
          window.location.reload();
        });
    }
  };

  return (
    <div className="container mb-5">
      <div className="d-flex align-items-center justify-content-center title-styel">
        <div>
          <h1 className="title-styel  text-center mt-4">
            You Total Booked{" "}
            <span className="title-color">0{myAllOrders.length}</span> Tour
            Packages
          </h1>
        </div>
      </div>
      <Row xs={1} md={3} className="g-4 my-2">
        {myAllOrders.map((myOrders) => (
          <Col>
            <Card className="card-style" style={{ height: "370px" }}>
              <Card.Img
                variant="top"
                style={{ height: "190px" }}
                src={myOrders?.bookedPackage?.photo}
              />
              <Card.Body>
                <Card.Title className="title-color">
                  {myOrders?.bookedPackage?.title}
                </Card.Title>
                <Card.Text>
                  <p>
                    <small> Date: </small>
                    {myOrders?.date}
                  </p>
                </Card.Text>
                <Card.Text>
                  <p>
                    <small>Price: </small>
                    {myOrders?.bookedPackage?.price}
                  </p>
                </Card.Text>

                <Button
                  onClick={() => handleDeleteOrder(myOrders?._id)}
                  className="fw-bold"
                  variant="danger"
                >
                  Cancel
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
