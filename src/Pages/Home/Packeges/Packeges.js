import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Packege from "../Packege/Packege";
import logo from "../../../images/logo/t-logo-2.png";
const Packeges = () => {
  const [packeges, setPackeges] = useState([]);
  useEffect(() => {
    fetch("https://ancient-sierra-47669.herokuapp.com/tourPackeges")
      .then((res) => res.json())
      .then((data) => setPackeges(data));
  }, []);

  return (
    <div className="container mt-5">
      {packeges.length === 0 ? (
        // spiner
        <div className=" d-flex align-items-center justify-content-center my-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <div>
          <div className="center  d-flex align-items-center justify-content-center">
            <div>
              <div className="center  d-flex align-items-center justify-content-center">
                <img style={{ width: "100px" }} src={logo} alt="" />
              </div>
              <h1 className=" text-center mb-4 fw-bold ">
                Most Popular <span className="title-color">Tour Packeges</span>
              </h1>
            </div>
          </div>
          {packeges.map((packege) => (
            <div className="row mb-4">
              <Packege key={packege._id} packege={packege}></Packege>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packeges;
