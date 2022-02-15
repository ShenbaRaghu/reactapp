import React from "react";

const Main = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid text-center mt-3">
        <div className="container">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card">
              <img
                src="../images/img1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Model 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <img
                src="../images/img2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Model 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <img
                src="../images/img3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Model 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <img
                src="../images/img4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Model 4</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
