import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ManageAllOrders = () => {
  const [orderdPackages, setOrderedPackages] = useState([]);

  useEffect(() => {
    fetch("https://ancient-sierra-47669.herokuapp.com/bookedPackages")
      .then((res) => res.json())
      .then((data) => setOrderedPackages(data));
  }, []);
  const handleDeleteOrder = (id) => {
    const response = window.confirm("Want to DELETE?");
    if (response === true) {
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
    }
  };

  if (orderdPackages.length === 0) {
    return (
      // spiner
      <div
        className="  d-flex align-items-center justify-content-center"
        style={{ height: "500px" }}
      >
        <Spinner className="title-color" animation="border" />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center justify-content-center title-styel">
        <div>
          <h1 className="title-styel  text-center mt-4">
            You Total Booked{" "}
            <span className="title-color">0{orderdPackages.length}</span> Tour
            Packages
          </h1>
        </div>
      </div>

      <Row xs={1} md={4} className="g-4 my-2">
        {orderdPackages.map((orderdPackage) => (
          <Col>
            <Card className="card-style">
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
                <Button
                  onClick={() => handleDeleteOrder(orderdPackage._id)}
                  className="fw-bold text-white button-bg"
                  variant=""
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

export default ManageAllOrders;
