import React from "react";
import bk from '../Images/bkl.png';

const Header = () => {
    
  return (
    <header>
      <div className="container-fluid header1 p-3" style={{backgroundColor:"#252B42"}}>
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand ms-5 text-white fs-1" href="/">
               BrandName
              </a>
              <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto">
                  <a className="nav-item nav-link text-white fs-5" href="/">
                    Home
                  </a>
                  <a className="nav-item nav-link text-white fs-5" href="/">
                    Product
                  </a>
                  <a className="nav-item nav-link text-white fs-5" href="/">
                    Pricing
                  </a>
                  <a className="nav-item nav-link text-white fs-5" href="/">
                    Contact
                  </a>
                </div>
                  <div className="aside d-flex me-4">
                    <a className="nav-item nav-link text-light fs-4 me-3" href="/">
                      Login
                    </a>
                    <button className="btn border border-dark btn-square px-3 text-light bg-primary">
                      Join Us 
                    </button>
                  </div>
              </div>
            </nav>
          </div>
          <div className="col-md text-center py-5">
            <h4 className="text-primary pt-3">Welcome</h4>
            <h1 className="text-light fs-1 py-3">Selling on the Internet like a pro</h1>
            <p className="text-light pt-2">We know how large objects will act, but things on a small scale just do not act that way</p>
            <button className="btn bg-primary mx-2 text-light">Get Quote Now</button>
            <button className="btn bg-dark border-primary text-primary px-4">Learn More</button>
          </div>
        </div>
        <div className="row pt-5">
            <div className="col-md-4 d-flex justify-content-center">
            <div className="card" style={{width: "20rem"}}>
                <img src={bk} className="card-img-top" alt="H" />
                <h6>Training courses</h6>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card" style={{width: "20rem"}}>
                <img src={bk} className="card-img-top" alt="H" />
                <h6>Training courses</h6>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card" style={{width: "20rem"}}>
                <img src={bk} className="card-img-top" alt="H" />
                <h6>Training courses</h6>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
