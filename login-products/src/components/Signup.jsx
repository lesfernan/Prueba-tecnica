import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../css/singup-login.css";

const Signup = () => {
  const navigate = useNavigate();
  const { setSignup } = useContext(DataContext);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const sendingData = () => {
    setSignup({
      password: password,
      password2: password2,
      email: email,
      first_name: firstName,
      last_name: lastName,
    });
  };
  return (
    <div className="signup">
      <form
        className="form d-flex flex-column justify-content-center"
        action="signup"
      >
        <div className="d-flex my-3 justify-content-center align-items-center">
          <input
            type="text"
            name="firts"
            placeholder="Nombre"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
        </div>
        <div className="d-flex mb-3 justify-content-center align-items-center">
          <input
            type="text"
            name="Last"
            placeholder="Apellido"
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
        </div>
        <div className="d-flex mb-3 justify-content-center align-items-center">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <div className="d-flex mb-3 justify-content-center align-items-center">
          <input
            type="text"
            name="password"
            placeholder="Contraseña"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <div className="d-flex mb-3 justify-content-center align-items-center">
          <input
            type="text"
            name="password2"
            placeholder="Repetir Contraseña"
            onChange={(event) => setPassword2(event.currentTarget.value)}
          />
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center ">
          <button
            className="button mb-2"
            onClick={(event) => {
              event.preventDefault();
              sendingData();
            }}
          >
            <p>REGISTRAME</p>
          </button>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <span className="" onClick={() => navigate("/login")}>
            Ya tienes cuenta?
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
