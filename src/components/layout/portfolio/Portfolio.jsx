import React, { Component } from "react";
import BecentralHead from "./../../../assets/img/Becentral-head.png";
import { Link, HashRouter } from "react-router-dom";
import Wibicom from "./../../../view/Wibicom";
import cardData from "./../../../data.json";
import { hashHistory } from "react-router";

import { TimelineLite, Expo } from 'gsap';
import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'debug.addIndicators';



class Portfolio extends Component {
 
 
  render() {
  
    return (
      <div className="section portfolio-section" >
        <h3 className="title-split">PORTFOLIO</h3>
        <div className="card-container">
          <div className="card">
            <div className="card-header Becentral-header" />
            <div className="card-body">
              <h4 className="card-title">Be-central</h4>
              <div className="underline" />
              <p className="card-description">
                At Becode i had the opportunity to tem up with two other developers to rebuild the be central website from the designing part to the deployement.
                Want to know a little bit more ?!
              </p>
              <div className="button-content">
                <Link className="btn" to="/becentral">
                  <span>
                    <p className="innerbtn">Learn more</p>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header Omismo-header" />
            <div className="card-body">
              <h4 className="card-title">Omismo</h4>
              <div className="underline" />
              <p className="card-description">
                During my internship at wibicom i had to integrate a e'commerce website for Omismo.the website is not yet online but will be soon.
              </p>
              <div className="button-content">
                <p>Comming Soon</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header Hive-header" />
            <div className="card-body">
              <h4 className="card-title">Hive</h4>
              <div className="underline" />
              <p className="card-description">
                One of the biggest challenge i had was the hive marketplace. with a fellow developer we have to build an all new market-place for the freelancers that wants to work on blockchain projects.
                I had to go out of my comfort zone and learn a lot of new technologies.
              </p>
              <div className="button-content">
                <Link className="btn" to="/hive">
                  <span>
                    <p className="innerbtn">Learn more</p>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
