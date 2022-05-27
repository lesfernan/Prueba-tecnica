import React from "react";
import { Outlet } from "react-router-dom";
import DataProvider from "../context/DataContext";
// import { Link } from "react-router-dom";
import "../css/funt.css";

const Funt = () => {
  return (
    <DataProvider>
      <div className="position d-flex justify-content-center align-items-center">
        <video src="../img/fondo.mp4" loop="infinite" muted autoPlay></video>
        <div className="curtain"></div>
        <div className="title d-flex flex-column justify-content-center align-items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </DataProvider>
  );
};

export default Funt;
