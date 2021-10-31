import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/travel-logo.png";
import payphoto from "../../../images/payment-method.jpg";
const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;

const Footer = () => {
  return (
    <div className="footer-bg text-white">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-4">
            <h3>
              {" "}
              <img style={{ width: "100px" }} src={logo} alt="" /> Dreamy
              Travels
            </h3>
            <p className="text-muted">
              Travel takes us out of our comfort zones and inspires us to see,
              taste and try new things. It constantly challenges us, not only to
              adapt to and explore new surroundings.
            </p>
            <small>{phoneIcon} +92555666333</small> <br />
            <small>{mailIcon} dreamy_travelsy@gmail.com</small> <br />
          </div>
          <div className="col-md-4 text-center">
            <img
              className="rounded"
              style={{ width: "100%" }}
              src={payphoto}
              alt=""
            />
          </div>

          <div className="col-md-4">
            <h4 className="text-center">Subscrib</h4>
            <input
              className="p-2 rounded m-2"
              type="text"
              placeholder="Enter your email"
            />
            <Button className="p-2 btn  button-bg">Submit</Button>
            <p>
              <small className="text-muted">
                Get the latest news and updates right at your inbox.
              </small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center text-muted p-2">
        <p>&copy; 2021 Dreamy Travels. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
