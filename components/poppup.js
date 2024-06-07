import React from 'react';
import styles from "../styles/poppup.module.css";

function Poppup({ trigger, setTrigger, children }) {
  return trigger ? (
    <div className={styles.poppup}>
      <div className={styles["poppup-inner"]}>
        <button className={styles["close-btn"]} onClick={() => setTrigger(false)}>X</button>
        
        {children}
      </div>
    </div>
  ) : null;
}

export default Poppup;
