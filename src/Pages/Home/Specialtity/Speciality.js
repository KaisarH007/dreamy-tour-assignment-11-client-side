import React from "react";
import photo1 from "../../../images/speciality/sp-1.png";
import photo2 from "../../../images/speciality/sp-2.png";
import photo3 from "../../../images/speciality/sp-3.png";
import photo4 from "../../../images/speciality/sp-4.png";
const Speciality = () => {
  return (
    <div className="container my-5">
      <div className="center  d-flex align-items-center justify-content-center">
        <div>
          <h1 className=" text-center fw-bold ">Our Specialites</h1>
          <p className="text-center">
            Travel takes us out of our comfort zones and inspires us to see,
            taste and try new things. It constantly challenges us, not only to
            adapt to and explore new surroundings, but also to engage with
            different people, to embrace adventures as they come and to share
            new and meaningful experiences with friends and loved ones
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card pt-4 h-100">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="rounded-circle "
                style={{ width: "110px" }}
                src={photo4}
                alt=""
              />
            </div>
            <div className="card-body text-center">
              <h3>Best Price Garunated</h3>
              <p>
                We Provide Best Price to Our Customers.We Provide Best Price to
                Our Customers.We Provide Best Price to Our Customers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card pt-4 h-100">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="rounded-circle "
                style={{ width: "100px" }}
                src={photo2}
                alt=""
              />
            </div>
            <div className="card-body text-center">
              <h3>
                Travellers <br /> love Us
              </h3>
              <p>
                We Provide Best Price to Our Customers.We Provide Best Price to
                Our Customers.We Provide Best Price to Our Customers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card pt-4 h-100">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="rounded-circle "
                style={{ width: "100px" }}
                src={photo3}
                alt=""
              />
            </div>
            <div className="card-body text-center">
              <h3>
                Best Travel <br /> Agent
              </h3>
              <p>
                We Provide Best Price to Our Customers.We Provide Best Price to
                Our Customers.We Provide Best Price to Our Customers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card pt-4 h-100">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="rounded-circle "
                style={{ width: "100px" }}
                src={photo1}
                alt=""
              />
            </div>
            <div className="card-body text-center">
              <h3>Our Dedicated Support</h3>
              <p>
                We Provide Best Price to Our Customers.We Provide Best Price to
                Our Customers.We Provide Best Price to Our Customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
