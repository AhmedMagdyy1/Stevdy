import React from "react";
import styles from "./Platform.module.scss";

export default function Platform() {
  return (
    <>
      <div className=" position-relative py-5 my-5 overflow-hidden">
        <img
          className={`${styles.rightBlob}`}
          src="Images/Rectangle 11.png"
          alt=""
        />
        <div className="container mt-5 py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 mb-5">
              <hr className={`${styles.hrStyle} w-25`} />
              <h3 className={`${styles.h3Style} mb-4`}>
                Best Platform for the <br /> Technological Era
              </h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
                <br /> Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet
              </p>
              <span className={`${styles.spanStyle}`}>
                Learn About Our Success
                <i class="fa-solid fa-arrow-right-long mx-4"></i>
              </span>
            </div>
            <div className="col-lg-6">
              <img className="w-100" src="Images/dashBoard.png" alt="Stevdy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
