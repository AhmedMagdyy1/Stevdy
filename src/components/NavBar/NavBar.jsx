import React from "react";
import styles from "./Navbar.module.scss";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className={`navbar-brand ${styles.navHead}`} href="#">
            Stevdy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Browser
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Bootcamps
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  How it Works
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="#">
                  Testemonial
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <button className={`btn ${styles.btnBg} px-5`}>About us</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
