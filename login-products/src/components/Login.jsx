import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../css/singup-login.css";

const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sendingData = () => {
    setLogin({
      password: password,
      email: email,
    });
  };
  return (
    <div className="login">
      <form className="form" action="signup ">
        <div className="my-3 d-flex justify-content-center aling-items-center">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <div className="mb-3 d-flex justify-content-center aling-items-center">
          <input
            type="text"
            name="password"
            placeholder="Contraseña"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="button mb-2"
            onClick={(event) => {
              event.preventDefault();
              sendingData();
            }}
          >
            <p>LOGUEAME</p>
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="" onClick={() => navigate("/signup")}>
            Crea una cuenta!
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
