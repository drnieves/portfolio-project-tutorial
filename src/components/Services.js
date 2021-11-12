import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="tratamientos" className="services">
      <h1 className="py-5"> Tratamientos </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faDesktop}
                  size="2x"
                />{" "}
              </div>
              <h3>Arañitas</h3>
              <p>Me aproximoa acada proyecto de forma individual</p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faGoogle}
                  size="2x"
                />{" "}
              </div>
              <h3>Varices</h3>
              <p>Cursos especializdos en nuevas tecnologias </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFileCode}
                  size="2x"
                />{" "}
              </div>
              <h3>Úlcera Varicosa</h3>
              <p>Laser y entrenamiento focalizado para </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />{" "}
              </div>
              <h3>Pie Diabetico</h3>
              <p>Siriendo con calidad desde 2003 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
