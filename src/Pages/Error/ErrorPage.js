//import react libraries
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

//import CSS
import "./ErrorPage.css";

//import lottie
import Errorpage from "../../assets/lottie/error/ErrorPage.json";

//import 3rd part library
import Lottie from "lottie-react";

const ErrorPage = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <div className={theme ? "error-page-dark" : "error-page-light"}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 ">
              <Lottie
                animationData={Errorpage}
                loop={true}
                style={{ height: "400px" }}
              />
            </div>
            <div className="col-lg-3  d-flex justify-content-center">
              <NavLink to="/" className="btn btn-outline-primary">
                Back To Home Page
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
