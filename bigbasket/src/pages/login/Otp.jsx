import React, { useState } from "react";
import style from "./otp.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getuserapialready } from "../Signup/auth.actions";

const Otp = ({ setShow, setShow1, text, isOpen, login }) => {
  const [pin, setPin] = useState("");
  let dispatch = useDispatch();
  // const data = useSelector((state) => state.auth.token);
  const {email,otp,userid} = useSelector((state)=>state.auth);
  console.log(email,otp,"otpans emidl");

  function ChangeHandler(input) {
    setPin(input);
  }
  function OtpHandler() {
    if (pin == otp && email==null) {
      setShow1(false);
      setShow(false);
    } else if(email&&otp==pin){
      console.log(email,"otp email only")
      let id = localStorage.getItem("userid");
      dispatch(getuserapialready(email))
      // localStorage.setItem("data", JSON.stringify(data));
      // close the box
      login();
      isOpen();
    }else if(pin!==otp){
      alert("oops ! wrong otp try agein !")
    }
  }

  return (
    <div>
      <div className={style.headdiv}>
        <MdArrowBackIosNew
          color="#444"
          className={style.backicon}
          onClick={() => {
            setShow(true);
          }}
        ></MdArrowBackIosNew>
        <h3 className={style.heading}>
          <p>Verify Email Address</p>
        </h3>
      </div>
      <div className={style.middle}>
        <p className={style.psmall}>
          Please check the OTP sent to your email address
        </p>
        <p className={style.email}>
          {email}
          <button className={style.changebtn}>Change</button>
        </p>
      </div>
      <div className={style.input}>
        <p className={style.psmall} style={{ fontSize: "12px" }}>
          Enter OTP
        </p>
        <div className={style.pindiv}>
          <PinInput
            display="flex"
            placeholder=""
            outline={false}
            manageFocus={true}
            onChange={(e) => ChangeHandler(e)}
          >
            <PinInputField className={style.pinbox} />
            <PinInputField className={style.pinbox} />
            <PinInputField className={style.pinbox} />
            <PinInputField className={style.pinbox} />
            <PinInputField className={style.pinbox} />
            <PinInputField className={style.pinbox} />
          </PinInput>
          <center>
            <button className={style.changebtn1}> Resend OTP</button>
          </center>
        </div>
        <button className={style.varbtn} onClick={()=>OtpHandler()}>
          Veify & Continue
        </button>
      </div>
    </div>
  );
};

export default Otp;
