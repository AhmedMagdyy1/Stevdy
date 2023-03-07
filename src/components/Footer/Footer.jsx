import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={`mt-5 py-5 ${styles.footerBg}`}>
        <div className="container d-flex justify-content-between footerStyle">
          <div className="d-flex flex-column w-25 footerDiv mb-3">
            <h2 className="text-white h1">Study</h2>
            <p className="text-white pe-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget diam at mi sollicitudin
            </p>
          </div>
          <div className="d-flex flex-column w-25 mt-2 footerDiv mb-3">
            <p className="text-white fw-bold">Nos services</p>
            <p className="text-white">
              Avis clients Mentions légales Plan du site Blog d’Idéematic Le
              dictionnaire du digital ‹ Notre boutique /›
            </p>
          </div>
          <div className="d-flex flex-column footerDiv">
            <p className="text-white fw-bold">Sign up for Special Offers!</p>
            <form>
              <div className={styles.search}>
                <input type="text" placeholder="Mail" />
                <button type="submit" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
