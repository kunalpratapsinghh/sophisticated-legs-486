import React, { useState } from "react";
import style from "./signup.module.css";
import axios from "axios";
import { signupapi } from "../Signup/auth.actions";
import { useDispatch } from "react-redux";
const Signup = ({ close, login }) => {
  const [data, setdata] = useState({
    firstname: "",

    lastname: "",
    email: "",
  });
  let dispatch= useDispatch();
  function onChnageHandler(e) {
    let {name,value} =e.target
    setdata({
      ...data,
      [name]: value,
    });
  }
  function submitHandler() {
    dispatch(signupapi(data))
    login();
    close();
  }
  return (
    <div>
      <h3 className={style.heading}>
        <p>Almost There</p>
      </h3>
      <p className={style.psmall}>Help us to know you better!</p>
      <div className={style.form}>
        <div className={style.Namediv}>
          <input
            type="text"
            onChange={onChnageHandler}
            name="firstname"
            id=""
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={onChnageHandler}
            name="lastname"
            id=""
            placeholder="Last Name"
          />
        </div>
        <div className={style.Emaildiv}>
          <input
            type="text"
            onChange={onChnageHandler}
            name="email"
            id=""
            placeholder="Email"
            className={style.einput}
          />
        </div>
        <button className={style.varbtn} onClick={submitHandler}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Signup;
