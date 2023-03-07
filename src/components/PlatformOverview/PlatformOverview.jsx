import React from "react";
import styles from "./PlatformOverview.module.scss";

export default function PlatformOverview() {
  return (
    <>
      <div className="d-flex flex-column text-center mt-5 pt-5">
        <p className={`text-muted m-0 ${styles.pStyle}`}>
          Advanced Customer Service Platform
        </p>
        <h3 className={`${styles.h3Style}`}>Platform Overview</h3>
        <p className="w-50 m-auto text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
          <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </p>
        <div>
          <img
            className="w-50 imgOverview"
            src="Images/dashBoard.png"
            alt="Stevdy"
          />
          <div className="d-flex justify-content-center">
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
      </div>
    </>
  );
}
