import React from "react";
import photo1 from "../../../../images/tour-experience/h4-team-member-1.jpg";
import photo2 from "../../../../images/tour-experience/h4-team-member-2.jpg";
import photo3 from "../../../../images/tour-experience/h4-team-member-3.jpg";
import photo4 from "../../../../images/tour-experience/h4-team-member-4.jpg";
import logo from "../../../../images/logo/t-logo-1.png";
import "./TourExperience.css";
const TourExperience = () => {
  return (
    <>
      <div className=" my-3 text-center d-flex align-items-center justify-content-center">
        <div>
          <div className="center  d-flex align-items-center justify-content-center">
            <img style={{ width: "70px" }} src={logo} alt="" />
          </div>
          <h1 className="fw-bold  ">
            Dreamy Tour's <span className="title-color">Achivements</span>
          </h1>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-md-3 g-0">
          <img style={{ width: "100%" }} src={photo1} alt="" />
        </div>
        <div className="col-md-3 g-0">
          <img style={{ width: "100%" }} src={photo2} alt="" />
        </div>
        <div className="col-md-3 g-0">
          <img style={{ width: "100%" }} src={photo3} alt="" />
        </div>
        <div className="col-md-3 g-0">
          <img style={{ width: "100%" }} src={photo4} alt="" />
        </div>
      </div>
      <div className="experiece-conatiner">
        <div className="row">
          <div className="col-md-3">
            <div className=" text-white text-center d-flex align-items-center justify-content-center">
              <div>
                <h1 className=" experience-title">21+</h1>
                <p className="fs-2">Experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" text-white text-center d-flex align-items-center justify-content-center">
              <div>
                <h1 className="experience-title">2190K</h1>
                <p className="fs-2">Ours on Projects</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" text-white text-center d-flex align-items-center justify-content-center">
              <div>
                <h1 className="experience-title">212</h1>
                <p className="fs-2">National Awards</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" text-white text-center d-flex align-items-center justify-content-center">
              <div>
                <h1 className="experience-title">556</h1>
                <p className="fs-2">Profesional services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourExperience;
