import React from "react";
import logologin from "../assets/Login/bg_login.jpg";
import Auth from "../components/Auth/Login";
import NavbarLogin from "../components/Layout/NavbarLogin";

const Login = () => {
  return (
    <div className="responsive-container">
      <NavbarLogin />
      <section className="mx-md-5 my-5 px-lg-5 m-4 m-sm-5">
        <div className="row g-0 justify-content-between align-items-center">
        <div className="col-md-5 col-sm-12">
            <Auth />
          </div>

          <div className="col-md-7 col-sm-12 row justify-content-end">
            <img src={logologin} alt="logologin" className="logologin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
