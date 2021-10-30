import React, { useEffect, useState } from "react";
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
      <div className="center  d-flex align-items-center justify-content-center">
        <h1 className="title-stye ">Our Tour Packeges</h1>
      </div>
      {packeges.map((packege) => (
        <Packege key={packege.key} packege={packege}></Packege>
      ))}
    </div>
  );
};

export default Packeges;
