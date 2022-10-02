import React from "react";
import style from "./box.module.css";

const Rightbox = () => {
  return (
    <div>
      <div className={style.rightinnerbox}>
        <p>Shopping at fingertips!! Download our app</p>
        <button className={style.gplay}>
          <img src="/gplay.png" alt="" />
          Google Play
        </button>
        <button className={style.apple}>
          <img src="/apple.png" alt="" /> App Store
        </button>
      </div>
    </div>
  );
};

export default Rightbox;
