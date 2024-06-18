import React from 'react'
import Image from "next/image";
import { GoldPack, Organizer } from "../constants/images";
import styles from "../../styles/dashboard.module.css";
function ProfitPack() {
   
  return (
    <>
      <div className={styles.profitChart00}>
        <div className="d-flex justify-content-between">
          <div className={styles.walletDetail01}>
            <div className={styles.profitChart010}>
              <span>My invest pack</span>
              <h5>GOLD PACK</h5>
            </div>
            <div className={styles.profitChart011}>
              <span> 120% </span>
              <span>ROL </span>
              <span>Daily for 30 days</span>
            </div>
          </div>
          <div className={styles.walletDetail02}>
            <div className={styles.walletDetail020}>
              <Image src={GoldPack} alt="golden pack" width={49} height={49} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.profitChart01}>
        <div className="d-flex justify-content-between">
          <div className={styles.profitChart0101}>
            <div className={styles.profitChart01010}>
              <span>Current event</span>
              <h5>Event 3</h5>
            </div>
            <div className={styles.profitChart01011}>
              <span> $1.145.00 </span>
            </div>
          </div>
          <div className={styles.walletDetail02}>
            <div className={styles.profitChart020}>
              <Image src={Organizer} alt="organizer" width={49} height={49} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfitPack