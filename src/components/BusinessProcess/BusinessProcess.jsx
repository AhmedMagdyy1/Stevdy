import React from "react";
import styles from "./BusinessProcess.module.scss";

export default function BusinessProcess() {
  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 mb-5">
            <h3 className={`${styles.h3Style} mb-4`}>
              Acceleration Process to Grow Your Business
            </h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </p>
            <button className={`btn ${styles.btnBg} px-5`}>About Us</button>
          </div>
          <div className="col-lg-6">
            <section className={styles.conferenceTimeline}>
              <div class={styles.conferenceCenterLine}></div>
              <div class={styles.conferenceTimelineContent}>
                <div class={styles.timelineArticle}>
                  <div class={styles.contentRightContainer}>
                    <div class={styles.contentRight}>
                      <div className="fw-bold">Market Research</div>
                      <p className="m-0 mt-5 text-muted">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                  </div>
                  <div class={styles.metaDate}>
                    <span class={styles.date}>1</span>
                  </div>
                </div>
                <div class={styles.timelineArticle}>
                  <div class={styles.contentRightContainer}>
                    <div class={styles.contentRight}>
                      <div className="fw-bold">Market Research</div>
                      <p className="m-0 mt-5 text-muted">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                  </div>
                  <div class={styles.metaDate}>
                    <span class={styles.date}>1</span>
                  </div>
                </div>
                <div class={styles.timelineArticle}>
                  <div class={styles.contentRightContainer}>
                    <div class={styles.contentRight}>
                      <div className="fw-bold">Market Research</div>
                      <p className="m-0 mt-5 text-muted">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                  </div>
                  <div class={styles.metaDate}>
                    <span class={styles.date}>1</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
