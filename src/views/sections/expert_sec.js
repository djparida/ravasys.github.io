import React from "react";
import Expert_png from "../../assets/images/expert.png";
import appShapeTop from "../../assets/images/app-shape-top.png";
import appShapeLeft from "../../assets/images/app-shape-left.png";

const ExpertSec = (props) => {
  const { styles } = props;
  return (
    <div className="available-app-area">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="app-caption">
              <div
                className="section-tittle section-tittle3 wow  fadeInUp animated"
                data-wow-delay="0.3s"
                style={styles.ex_sec}
              >
                <h2>Our Expert available to Grow your Business</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore fug.
                </p>
                <div className="app-btn">
                  <button type="button" className="btn btn-primary">
                    {" "}
                    Get a Callback
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-center">
            <div className="app-img p-0">
              <img
                src={Expert_png}
                className="wow fadeInUp  animated"
                alt="ravansys expert"
                title="ravansys expert men"
                style={styles.ex_sec}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="app-shape">
        <img
          src={appShapeTop}
          alt="Get a Callback"
          className="app-shape-top heartbeat d-none d-lg-block"
        />
        <img
          src={appShapeLeft}
          alt="Get a Callback"
          className="app-shape-left d-none d-xl-block"
        />
      </div>
    </div>
  );
};

export default ExpertSec;
