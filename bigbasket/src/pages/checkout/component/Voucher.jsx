import React from "react";
import styles from "./Voucher.module.css";
const Voucher = () => {
  return (
    <div className={styles.voucherPriceDiv}>
      <h3 className={styles.boldText}>Apply Voucher</h3>
      <div className={styles.voucher}>
        <div className={styles.inputButton}>
          <input type="text" className={styles.voucherInput} />
          <button className={styles.button}>APPLY</button>
        </div>
        <div className={styles.vouchersAvailable}>
          <div className={styles.circle1}></div>
          <p style={{ marginLeft: "20px" }}>14 Vouchers available</p>
          <div className={styles.circle2}></div>
        </div>
      </div>
      <div>
        <h3 className={styles.boldText}>Order Summary</h3>
        <div className={styles.order}>
          <div className={styles.valueCharge}>
            <p>Basket Value Rs{" " + 88}</p>
            <p>Delivery Charge FREE</p>
          </div>
          <div className={styles.amountPayable}>
            <h4>Total Amount Rs{" " + 88}</h4>
            <div className={styles.totlaSaving}>
              <h5 className={styles.saving}>Total Savings Rs58.98</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;