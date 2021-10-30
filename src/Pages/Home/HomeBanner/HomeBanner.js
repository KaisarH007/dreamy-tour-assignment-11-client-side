import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeBanner.css";
import banner1 from "../../../images/bannerImage/Things-to-do-in-Grand-Canyon.jpg";
import banner2 from "../../../images/bannerImage/Grand-Canyon-National-Park.jpg";
import banner3 from "../../../images/bannerImage/Coxs-Bazar-Sea-Beach-Bangladesh.jpg";
import banner4 from "../../../images/bannerImage/Best-Places-in-UK.jpg";

const HomeBanner = () => {
  return (
    <div className="row">
      {/* <div className="col-md-5">
        <div className=" bg-warning text-center d-flex align-items-center justify-content-center">
          <div>
            <h1>Welcome to Dreamy Tour</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quasi accusamus qui animi. Excepturi a nam maiores
              earum id quam voluptatibus in accusantium consectetur, beatae iure
              recusandae exercitationem, ipsa illo.
            </p>
          </div>
        </div>
      </div> */}
      <div className="col-md-12">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              style={{ height: "300px", width: "100%" }}
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="title-styel">Grand Canyon</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "300px", width: "100%" }}
              src={banner2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="title-styel">Grand Canyon</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "300px", width: "100%" }}
              src={banner3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="title-styel">Cox's bazar</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "300px", width: "100%" }}
              src={banner4}
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h1 className="title-styel">The UK’s All-in-One</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeBanner;
