import React from "react";
import styles from "./PlatformTechnology.module.scss";

export default function PlatformTechnology() {
  return (
    <>
      <div className=" position-relative">
        <img
          className={`${styles.leftBlob}`}
          src="Images/Rectangle 9.png"
          alt=""
        />
        {/* <div className={`${styles.leftBlob}`}></div> */}
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 mb-5">
              <img
                className={`w-50 ${styles.leftImg}`}
                src="Images/dashBoard.png"
                alt="Stevdy"
              />
            </div>
            <div className="col-lg-6 platformDetails">
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
          </div>
        </div>
      </div>
    </>
  );
}
