import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import ModalPut from "./ModalPut";

const Navbar = () => {
  const navigate = useNavigate();
  const SingOff = () => {
    localStorage.removeItem("token");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-5">
      <div className="container-fluid d-flex aling-items-center">
        <h4 className="navbar-brand m-0 px-3">Navbar</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="*"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item disabled" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item disabled" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item disabled" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <p
                className="nav-link m-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Product
              </p>
              <Modal />
              <ModalPut></ModalPut>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-info"
              onClick={() => {
                SingOff();
                navigate("/");
              }}
            >
              Sing Off
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
