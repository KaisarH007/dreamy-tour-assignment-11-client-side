import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import AllOrders from "../AllOrders/AllOrders";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
const ManageAllOrders = () => {
  const [orderdPackages, setOrderedPackages] = useState([]);

  useEffect(() => {
    fetch("https://ancient-sierra-47669.herokuapp.com/bookedPackages")
      .then((res) => res.json())
      .then((data) => setOrderedPackages(data));
  }, []);
  const handleDeleteOrder = (id) => {
    const url = `https://ancient-sierra-47669.herokuapp.com/bookedPackages/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remainingServices = orderdPackages.filter(
            (orderdPackage) => orderdPackage._id !== id
          );
          setOrderedPackages(remainingServices);
        }
      });
  };

  if (orderdPackages === []) {
    return (
      <div
        className=" d-flex align-items-center justify-content-center"
        style={{ height: "500px" }}
      >
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center title-styel">
        <div>
          <h1 className="title-styel text-center text-success mt-2">
            Total Orders {orderdPackages.length}
          </h1>
        </div>
      </div>

      <Row xs={1} md={4} className="g-4 my-2">
        {orderdPackages.map((orderdPackage) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "100px" }}
                src={orderdPackage.bookedPackage.photo}
              />
              <Card.Body>
                <Card.Text>
                  <p>
                    <small>Tourist: </small>
                    {orderdPackage.customerName}
                  </p>
                </Card.Text>
                <Card.Text>
                  <p>
                    <small>Email : </small> {orderdPackage.customerEmail}
                  </p>
                </Card.Text>
                {/* <Card.Text>
                  <p>
                    <small>ID : </small>
                    {orderdPackage.bookedPackage._id}
                  </p>
                </Card.Text> */}
              </Card.Body>
              <Button
                onClick={() => handleDeleteOrder(orderdPackage._id)}
                className="fw-bold"
                variant="danger"
              >
                Delete
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageAllOrders;
