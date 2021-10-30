import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewPackege.css";
const AddNewPackege = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:7000/tourPackeges", data).then((res) => {
      console.log(res);
    });
    console.log(data);
  };
  return (
    <div className="add-service">
      <div className="d-flex align-items-center justify-content-center title-styel">
        <div>
          <h1 className="title-styel text-center">Add New</h1>
          <h1 className="title-styel">Tour Packege</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Packege title" required />
        <textarea
          {...register("description")}
          placeholder="Packege description"
          required
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Packege price"
          required
        />
        <input
          {...register("photo")}
          placeholder="Packege photo url"
          required
        />

        <input {...register("key")} placeholder="Packege key code" required />

        <input className=" btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddNewPackege;
