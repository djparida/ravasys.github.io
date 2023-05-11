const Header = () => {
  return (
    <>
      <div className="container" style={{marginTop: "67px"}}>
        <div className="row d-flex align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-9 ">
              <h1
                data-animation="fadeInUp"
                className="main-heading"
                data-delay=".6s"
                style={{animationDelay: "0.6s"}}
              >
                We build Software that elevates Customer Experience
              </h1>
              <p
                data-animation="fadeInUp"
                data-delay=".8s"
                style={{animationDelay: "0.8s"}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button type="button" className="btn btn-primary">
                {/* <i className="fa-regular fa-phone-arrow-up-right"></i> */}
                CALL US
              </button>
              <button type="button" className="btn btn-warning">
                {/* <i className="fa-thin fa-envelope"></i> */}
                CONTACT US
              </button>
            </div>
            <div className="col-lg-6 text-end">
              <img src={require('../../assets/images/engineer.svg').default} height="200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
