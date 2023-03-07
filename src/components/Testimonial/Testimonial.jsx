import React from "react";
import styles from "./Testimonial.module.scss";

export default function Testimonial() {
  return (
    <>
      <div className="text-center">
        <h4 className={`${styles.h4Style} mb-5 pb-5`}>
          Don't Just Take <br /> our Word for it
        </h4>
        <div className="d-flex justify-content-evenly py-5 my-5 brandsImg">
          <div className="d-flex flex-column">
            <span className={`${styles.spanStyle}`}>570</span>
            <p className="text-muted">Download</p>
          </div>
          <div className="d-flex flex-column">
            <span className={`${styles.spanStyle}`}>570</span>
            <p className="text-muted">Active Users</p>
          </div>
          <div className="d-flex flex-column">
            <span className={`${styles.spanStyle}`}>570</span>
            <p className="text-muted">Positive Feedback</p>
          </div>
          <div className="d-flex flex-column">
            <span className={`${styles.spanStyle}`}>570</span>
            <p className="text-muted">+ Rating</p>
          </div>
        </div>
      </div>
      <div className="container mb-5 pb-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className={`col-lg-6 ${styles.card} mb-5 position-relative`}>
            <div className="p-5 cardPadding">
              <div className="d-flex">
                <img
                  className="w-50 testimonialImg"
                  src="Images/shutterstock_45.png"
                  alt="Stevdy"
                />
                <div className="d-flex flex-column ms-3">
                  <h5>Florrie Jacobs</h5>
                  <span className="text-muted">CEO of Company</span>
                  <p className="text-muted mt-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat
                  </p>
                  <div className="d-flex mt-3">
                    <span class={`fa fa-star ${styles.checked} pe-1`}></span>
                    <span class={`fa fa-star ${styles.checked} pe-1`}></span>
                    <span class={`fa fa-star ${styles.checked} pe-1`}></span>
                    <span class={`fa fa-star ${styles.checked} pe-1`}></span>
                    <span class={`fa fa-star ${styles.checked}`}></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`d-flex justify-content-center ${styles.ellipseContainer}`}
            >
              <img
                className={`${styles.ellipseStyle}`}
                src="Images/Ellipse 5.png"
                alt="Stevdy"
              />
              <img
                className={`mx-2 ${styles.ellipseStyle}`}
                src="Images/Ellipse 6.png"
                alt="Stevdy"
              />
              <img
                className={`${styles.ellipseStyle}`}
                src="Images/Ellipse 7.png"
                alt="Stevdy"
              />
            </div>
          </div>
          <div className="col-lg-6 px-5 pb-5">
            <h3 className={`${styles.h4Style}`}>
              Grow Your Business and <br /> Join Our Happy Users
            </h3>
            <p className="text-muted pe-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </p>
            <button className={`btn ${styles.btnBg} px-5`}>About Us</button>
          </div>
        </div>
      </div>
    </>
  );
}
