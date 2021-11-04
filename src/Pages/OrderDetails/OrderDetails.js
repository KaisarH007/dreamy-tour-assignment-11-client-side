import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import useAuth from "../../Hooks/useAuth";
import axios from "axios";
const OrderDetails = () => {
  const { packageID } = useParams();
  const [packageDetails, setPackageDetails] = useState({});
  const { user } = useAuth();
  const { title, price, description, photo } = packageDetails;

  useEffect(() => {
    fetch(
      `https://ancient-sierra-47669.herokuapp.com/packageDetails/${packageID}`
    )
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.bookedPackage = packageDetails;
    axios
      .post("https://ancient-sierra-47669.herokuapp.com/bookedPackage", data)
      .then((res) => {
        console.log(res);
        alert("orderd confirm");
        reset();
      });
    console.log(data);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img style={{ width: "100%" }} src={photo} alt="" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div>
            <h2 className="title-color">{title}</h2>
            <h4 className="title-color fw-bold">${price} </h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="add-service my-5">
        <div className="d-flex align-items-center justify-content-center ">
          <div>
            <p className="text-center fw-bold text-primary mt-2">
              Please fill up the below form and submit for confirm your exiting
              tour with Dreamy Tour
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user?.displayName}
            {...register("customerName")}
            required
            placeholder="Name"
          />
          <input
            defaultValue={user?.email}
            {...register("customerEmail")}
            required
            placeholder="Email"
          />

          <input {...register("address")} required placeholder="Addressr" />
          <input {...register("phone")} required placeholder="Phone Number" />
          <input
            type="date"
            {...register("date")}
            required
            placeholder={new Date()}
          />

          <input
            className="button-bg btn text-white"
            type="submit"
            value="CONFIRM"
          />
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;
