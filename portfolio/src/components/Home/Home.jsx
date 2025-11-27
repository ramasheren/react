import React from "react";
import './Home.css';
import Pic1 from "../../assets/imgs/b.jpg";
import Pic2 from "../../assets/imgs/c.jpg";


export default function Home() {
  return (
    <>
    <div className="carousel-wrapper">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src={Pic1}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption text-black content">
              <h1 className="fakhama">Hi!</h1>
              <h1 className="fakkhama eb3ed">Im Jackson</h1>
              <p>100% html5 bootstrap templates Made</p>
              <p className="tight-line">
                By{" "}
                <a className="text-primary" href="https://colorlib.com/">
                  Colorlib.com
                </a>
              </p>
              <p className="tight-line square">
                DOWNLOAD CV <i className="fa-solid fa-download" />
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Pic2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption text-black content">
              <h1 className="fakhama">I am</h1>
              <h1 className="fakkhama eb3ed">a Designer</h1>
              <p>100% html5 bootstrap templates Made</p>
              <p className="tight-line">
                By{" "}
                <a className="text-primary" href="https://colorlib.com/">
                  Colorlib.com
                </a>
              </p>
              <p className="tight-line square">
                VIEW PORTFFOLIO <i className="fa-solid fa-briefcase" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
