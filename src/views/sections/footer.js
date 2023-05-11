const Footer = () => {
  return (
    <>
      <div
        className="say-something-aera pt-90 pb-90 fix"
        style={{paddingTop: "79px", paddingBottom: "79px"}}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="say-something-cap">
                <h2>
                  Say Hello to the <span>RavanSys Technology</span> Business Team
                </h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>

        <div className="say-shape">
          <img
            src={require("../../assets/images/say-shape.png")}
            alt="Get a Callback"
            className="say-shape1 rotateme d-none d-xl-block"
          />
          <img
            src={require("../../assets/images/say-shape-right.png")}
            alt="Get a Callback"
            className="say-shape2 d-none d-lg-block"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
