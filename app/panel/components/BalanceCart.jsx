import styles from "../../styles/dashboard.module.css";
import Image from "next/image";
import React from "react";
import { Wallet1, Wallet11, Profit1 } from "../constants/images";
function BalanceCart() {
  const walletDetails = [
    {
      title: "Free Wallet",
      balance: "$1245.00",
      src: Wallet1,
      clasName:
        "col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start",
    },
    {
      title: "Investment wallet",
      balance: "$1542.00",
      src: Wallet11,
      clasName:
        "col-12 col-lg-4 d-flex justify-content-center justify-content-lg-center",
    },
    {
      title: "Amount of event profit",
      balance: "$248.000",
      src: Profit1,
      clasName:
        "col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end",
    },
  ];

  return (
    <>
      {walletDetails.map((wallet, index) => (
        <div
          className={wallet.clasName}
          key={index}
        >
          <div className={styles.walletDetail0}>
            <div className="d-flex justify-content-between">
              <div className={styles.walletDetail01}>
                <div className={styles.walletDetail010}>
                  <span>{wallet.title}</span>
                </div>
                <div className={styles.walletDetail011}>
                  <span>{wallet.balance}</span>
                </div>
              </div>
              <div className={styles.walletDetail02}>
                <div className={styles.walletDetail020}>
                  <Image
                    src={wallet.src}
                    alt={wallet.title}
                    width={48}
                    height={49}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BalanceCart;
