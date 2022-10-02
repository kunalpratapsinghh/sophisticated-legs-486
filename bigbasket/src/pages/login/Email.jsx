import React, { useRef, useState } from "react";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { loginAPI } from "../Signup/auth.actions";
import style from "./box.module.css";
const Email = ({ setShow, text, settext }) => {
  const ref = useRef();

  const dispatch = useDispatch();
  function MailHandler() {
    setShow(false);
    dispatch(loginAPI(text));
  }

  function changeHandler() {
    settext(ref.current.value);
  }
  return (
    <div>
      <h3 className={style.heading}>LOGIN/SIGN UP</h3>

      <input
        className={style.input}
        type="text"
        ref={ref}
        onChange={changeHandler}
        placeholder="Enter Email Address"
      />
      <button className={style.Lbtn}>Login using Mobile Number</button>
      <button className={style.Cbtn} onClick={MailHandler}>
        Continue{" "}
      </button>
      <p className={style.psmall}>
        Enter Email Address By continuing, I accept TCP-bigbasket’s{" "}
        <a> Terms and Conditions </a> and Privacy Policy.
      </p>
    </div>
  );
};

export default Email;
