import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="wrapper">
        <div className="conty">
        <p>ABOUT US</p>
        <h5>WHO AM I?</h5>
        <p>
          Hi Im Jackson Ford On her way she met a copy. The copy warned the
          Little Blind Text, that where it came from it would have been
          rewritten a thousand times and everything that was left from its
          origin would be the word and and the Little Blind Text should turn
          around and return to its own, safe country.
        </p>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card m-2 shadow-lg p-3 border-3 border-bottom border-top-0 border-start-0 border-end-0 border-primary">
              <div className="card-body rounded-0">
                <h2 className="text-primary">
                  <i className="fa-regular fa-lightbulb" />
                </h2>
                <p className="card-title mt-3">Graphic Design</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card m-2 shadow-lg p-3 border-3 border-bottom border-top-0 border-start-0 border-end-0 border-danger">
              <div className="card-body rounded-0">
                <h2 className="text-danger">
                  <i className="fa-solid fa-earth-americas" />
                </h2>
                <p className="card-title mt-3">Web Design</p>
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card m-2 shadow-lg p-3 border-3 border-bottom border-top-0 border-start-0 border-end-0 border-warning">
              <div className="card-body rounded-0">
                <h2 className="text-warning">
                  <i className="fa-solid fa-database" />
                </h2>
                <p className="card-title mt-3">Software</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card m-2 shadow-lg p-3 border-3 border-bottom border-top-0 border-start-0 border-end-0 border-success">
              <div className="card-body rounded-0">
                <h2 className="text-success">
                  <i className="fa-solid fa-mobile" />
                </h2>
                <p className="card-title mt-3">Application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
