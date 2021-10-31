import React from "react";
import { Button } from "react-bootstrap";

import loginBanner from "../../images/login-photo.jpg";
import logo from "../../images/Google__G__Logo.svg.png";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const { signInWithGoogle } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";
  const handleGoogleLogIn = () => {
    signInWithGoogle().then((result) => {
      history.push(url);
    });
  };

  return (
    <div style={{ height: "100%" }} className="container">
      <div className="row">
        <div className="col-md-12 my-5  d-flex align-items-center justify-content-center">
          <div className="card p-5">
            <h1 className="fw-bold">Please log In</h1>
            <p>Login and get axiting experience with Dreamy Tour</p>
            <Button onClick={handleGoogleLogIn} variant="dark">
              <img style={{ width: "40px" }} src={logo} alt="" /> Log In With
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
