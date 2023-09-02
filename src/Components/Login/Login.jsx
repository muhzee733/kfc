import React, { useState } from "react";
import "./Login.css";
import data from "./Data.json";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(null);
  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  const userLogin = data[0].phone;
  const onSubmit = () => {
    if (userLogin === login) {
      dispatch(loginSuccess(data));
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } else {
      console.log("Login unSuccesfully");
    }
  };

  return (
    <div className="logins">
      <div className="login-field">
        <div className="login-wrapper">
          <h3>Welcome!</h3>
          <div className="form-data position-relative">
            <label>Phone Number (03041846090)</label>
            <input type="tel" onChange={handleChange} />
            <span className="number-country">+92</span>
            <button className="btn btn-login" onClick={onSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
