import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-6">
            <p className={`${styles.contentBg} ${styles.paragraphStyle}`}>
              Advanced Platform
            </p>
            <h1 className={`${styles.contentBg} ${styles.h1Style}`}>
              Take your team
              <br /> to the next level
            </h1>
            <p className={`${styles.contentBg} my-4`}>
              Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr,
              sed diam nonumy eirmod
            </p>
            <button className={`btn ${styles.btnStyle} px-5`}>About Us</button>
          </div>
          <div className="col-lg-6">
            <img className="w-100" src="Images/dashBoard.png" alt="Stevdy" />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center brandsImg">
          <img src="Images/client-1.png" alt="Stevdy" />
          <img src="Images/client-2.png" alt="Stevdy" />
          <img src="Images/client-3 (1).png" alt="Stevdy" />
          <img src="Images/client-4.png" alt="Stevdy" />
          <img src="Images/client-5.png" alt="Stevdy" />
        </div>
      </div>
      <img class="blob" src="Images/Sans titre-1.png" alt="" />
    </>
  );
}
