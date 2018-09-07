import React, { Component } from 'react'
import { TweenLite,TimelineMax, Expo, yoyo } from 'gsap';

import Becode from './../../../assets/img/becode.png';
import WibicomLogo from './../../../assets/img/wibicom-logo.png'
import Hive from './../../../assets/img/hive-pentagon-amber.svg';
import Becentral from './../../../assets/img/Becentral_logo.png';
import Wibicom from './../../../view/Wibicom';




class Target extends Component {
    
    
  
    

  
    
  render() {
    return (
      <div className='section-path path-trough' id="path">
      <div className="title-container">
        <h3>Professional</h3>
        <h3>path</h3>
      </div>
      <div className="card-container">
        <div className="bulletContainer">
            <div className="bullet becode logoEnter">
                <img src={Becode} alt=""/>
            </div>
            <p className="work-description">Junior Front end developer at Becode</p>
            <p className="work-description">for almost 8 months i had the privilege to learn the web-development.This experience lead me to the front-end web development and i started to learn React Angular and Vue.js.</p>
            <div className="technology-container">
                <div className="technology-items">
                <i className="fab fa-react"></i>
               
                </div>
                <div className="technology-items">
                <i className="fab fa-angular"></i>
                <div>
              </div>
                </div>
                <div className="technology-items">
                <i className="fab fa-vuejs"></i>
                </div>
                <div className="technology-items">
                <i className="fab fa-sass"></i>
                </div>
                <div className="technology-items">
                <i className="fab fa-js"></i>
                </div>
                <div className="technology-items">
                <i className="fab fa-html5"></i>
                </div>
            </div>
        </div>
        <div className="bulletContainer">
            <div className=" becentral logoEnter">
              
                    <img src={Becentral} alt=""/>
                
            </div>
            <p className="work-description">Front end developer for Be-Central</p>
            <p className="work-description">i work for three months to recreate the becentral website. We where three students from becode to work on this prjoect.
            For this we used Figma Photoshop html css and javascript to build and attractive plateform for becentral</p>
            <div className="technology-container">
       
            <div className="technology-items">
            <i className="fab fa-sass"></i>
            </div>
            <div className="technology-items">
            <i className="fab fa-js"></i>
            </div>
            <div className="technology-items">
            <i className="fab fa-html5"></i>
            </div>
        </div>
        </div>
        </div>
        <div className="card-container">

        <div className="bulletContainer">
            <div className="bullet wibicom logoEnter">
                <img src={WibicomLogo} alt=""/>
            </div>
            <p className="work-description">Front end developer/Integrator at Wibicom</p>
            <p className="work-description">Following my learning path at Becode. I was looking for an internship as a front-end developer. I always wanted to have an Awwwards website and i saw the wibicom profil on the Awwwards website. i have decided to apply as front-end Integrator</p>
            <div className="technology-container">
        
            <div className="technology-items">
            <i className="fab fa-sass"></i>
            </div>
            <div className="technology-items">
            <i className="fab fa-js"></i>
            </div>
            <div className="technology-items">
            <i className="fab fa-html5"></i>
            </div>
            <div className="technology-items">
            <i className="fab fa-php"></i>
            </div>
            </div>
        </div>
        <div className="bulletContainer">
            <div className="hive logoEnter">
                <img src={Hive} alt="" className="hive-logo"/>
            </div>
            <p className="work-description">Junior Front end developer at Becode</p>
            <p className="work-description">After my internship at Wibicom i had the opportunity to work at hive blockchains society on more challenging projects. The main project was to build a all new marketplace for freelancer that want to use blockchaine in belgium</p>
            <div className="technology-container">
            <div className="technology-items">
            <i className="fab fa-react"></i>
           
            </div>
            <div className="technology-items">
            <i className="fab fa-node"></i>
            <div>
          </div>
            </div>
            <div className="technology-items">
            <i className="fab fa-python"></i>
            </div>
            <div className="technology-items">
            <i className="fab fa-sass"></i>
            </div>
            <div className="technology-items">
            <i className="fab fa-html5"></i>
            </div>
        </div>
            </div>
            </div>
            </div>
    )
  }
}
export default Target;