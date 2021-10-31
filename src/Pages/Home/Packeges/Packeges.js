import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Packege from "../Packege/Packege";

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
              <h1 className=" text-center fw-bold ">
                Our Most Popular Tour Packeges
              </h1>
              <p className="text-center">
                Travel takes us out of our comfort zones and inspires us to see,
                taste and try new things. It constantly challenges us, not only
                to adapt to and explore new surroundings, but also to engage
                with different people, to embrace adventures as they come and to
                share new and meaningful experiences with friends and loved ones
              </p>
            </div>
          </div>
          {packeges.map((packege) => (
            <div className="row">
              <Packege key={packege._id} packege={packege}></Packege>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packeges;
