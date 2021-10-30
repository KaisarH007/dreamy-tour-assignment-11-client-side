import React from "react";
import { Button } from "react-bootstrap";

import loginBanner from "../../images/login-photo.jpg";
import logo from "../../images/Google__G__Logo.svg.png";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const { handleGoogleLogIn } = useAuth();
  return (
    <div style={{ height: "100vh" }} className="container">
      <div className="row">
        <div className="col-md-6  d-flex align-items-center justify-content-center">
          <div className="card p-5">
            <h1>Please log In</h1>
            <p>Login and get axiting experience with Dreamy Tour</p>
            <Button onClick={handleGoogleLogIn} variant="dark">
              <img style={{ width: "40px" }} src={logo} alt="" /> Log In With
              Google Account
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <img style={{ width: "100%" }} src={loginBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
