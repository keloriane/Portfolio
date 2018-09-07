import React, { Component } from 'react'
import { TimelineLite, Expo,   TimelineMax, CSSRulePlugin } from 'gsap';

import ScrollMagic from 'ScrollMagic';
import 'debug.addIndicators';
import Background from './../components/layout/background/Background';



export default class IntroductionH extends Component {
  componentDidMount(){
   
    window.scrollTo(0, 0)
  const becentralController = new ScrollMagic.Controller();
  const logo = document.getElementsByClassName('logo-template')
  const title = document.getElementsByClassName('head-line-title')
  const describe = document.getElementsByClassName('describe')
  const introImg = document.querySelector('.intro-img')
  const time = 0.2;
  const headlineScene = new ScrollMagic.Scene({
    triggerElement:describe,
    reverse: false
    
  })
  .setTween(headTl)
  .addTo(becentralController, introductionTl)
 

  const headTl = new TimelineLite();
  
  headTl
  .from(logo,time,{opacity:0, y:100})
  .from(title,time,{opacity:0, y:100})
  .from(describe,time,{opacity:0, y:100})
  
  const introductionTl = new TimelineLite();
  const imageTrans = document.querySelector('.intro-img')
  const imageContent = document.querySelector('.intro-content')
  const titleContent = document.querySelector('.title-container-item')

introductionTl

  .from(imageTrans,time,{width:0 , ease:Expo.easeOut})
  .fromTo(imageTrans, time,{ transformOrigin: "top left", scaleX: 0 ,ease:Expo.easeOut}, { transform0rigin: 'top right', scaleX: 1,ease:Expo.easeOut })
  .fromTo(imageContent, 0,{ opacity: 0,ease:Expo.easeOut }, { opacity: 1,ease:Expo.easeOut })
  .from(titleContent,time,{x:"-100%",ease:Expo.easeOut})
  .to(imageTrans, time, { transformOrigin: 'top right', scaleX: 0,ease:Expo.easeOut}).to(imageContent, .25, {backgroundPosition:'0 0'},'-=.75') 
  introductionTl.play()   
}
  render() {
    return (
      <div className="introduction-container">
      <div className="container">
      <div className="img-wrapper">
      <div className="intro-img"></div>
      <div className="intro-content hive-content"></div>
      </div>
      <div className="intro-description">
        <div className="title-container">
          <h4 className="title-container-item">Hive BlocckChaine society <br/>Maretplace</h4>
          </div>
          <p className="descriptions">
          when i arrive at Hive they where just lauching ther new SCRL. And they neede to build a big marketplace for every cooperator to contribute on project.
          Plus they wanted to be the n° one in Belgium on the Blockchaine.I had to design some pages to do a feed of actuality for everyone 
          </p>
      </div>
      </div>
    </div>
    )
  }
}
