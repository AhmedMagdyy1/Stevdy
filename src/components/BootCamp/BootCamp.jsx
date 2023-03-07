import React from "react";
import styles from "./BootCamp.module.scss";

export default function BootCamp() {
  return (
    <>
      <div className="container py-5 mb-5">
        <div className="row">
          <div className="col-lg-6 pe-5 mb-5">
            <hr className={`${styles.hrStyle} w-25`} />
            <h3 className={`${styles.h3Style} mb-4`}>
              The Best Business
              <br /> solution for you
            </h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </p>
            <span className={`${styles.spanStyle}`}>
              Learn About Our Success
              <i class="fa-solid fa-arrow-right-long mx-4"></i>
            </span>
          </div>
          <div className="col-lg-6 mt-5 ps-5 mb-5">
            <div className="row">
              <div className="col-lg-6 mb-5">
                <span className={`p-4 ${styles.icon1}`}>
                  <img src="Images/Icon simple-boo.png" alt="Stevdy" />
                </span>
                <h6 className={`mt-5`}>Scale Your Activity</h6>
                <hr className={`${styles.hrStyle} w-25`} />
                <p className="text-muted">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore
                </p>
              </div>
              <div className="col-lg-6 mb-5">
                <span className={`p-4 ${styles.icon2}`}>
                  <img src="Images/Icon awesome-bo.png" alt="Stevdy" />
                </span>
                <h6 className={`mt-5`}>Bootcamps</h6>
                <hr className={`${styles.hrStyle} w-25`} />
                <p className="text-muted">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore
                </p>
              </div>
              <div className="col-lg-6 mb-5">
                <span className={`p-4 ${styles.icon3}`}>
                  <img src="Images/Icon material-h.png" alt="Stevdy" />
                </span>
                <h6 className={`mt-5`}>Hight Quality</h6>
                <hr className={`${styles.hrStyle} w-25`} />
                <p className="text-muted">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore
                </p>
              </div>
              <div className="col-lg-6">
                <span className={`p-4 ${styles.icon4}`}>
                  <img src="Images/Tracé 2.png" alt="Stevdy" />
                </span>
                <h6 className={`mt-5`}>Get Certifcation</h6>
                <hr className={`${styles.hrStyle} w-25`} />
                <p className="text-muted">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
