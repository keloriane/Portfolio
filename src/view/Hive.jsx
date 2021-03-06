import React, { Component } from 'react'
import HeadlineH from './../model/HeadlineH';
import IntroductionH from '../model/IntroductionH';
import PhaseH from './../model/PhaseH';
import { TweenMax,TweenLite,TimelineLite, Expo,   TimelineMax, CSSRulePlugin } from 'gsap';
import ScrollMagic from 'ScrollMagic';
import 'debug.addIndicators';
import Footer from '../components/layout/footer/Footer';
import Background from './../components/layout/background/Background'


class Hive extends Component {
  componentDidMount(){
   
    window.scrollTo(0, 0)
  const becentralController = new ScrollMagic.Controller();
  const logo = document.getElementsByClassName('logo-template')
  const title = document.getElementsByClassName('head-line-title')
  const describe = document.getElementsByClassName('describe')
  const introImg = document.querySelector('.intro-img')
  const time = 0.2;
 
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

  const titlephase = document.querySelectorAll('.title-phase')
  const section = document.querySelectorAll('.phase')
  const imageIntro = document.querySelector('.image-container')
  const detailswork = document.querySelector('.details-work')
  const detailsText = document.querySelector('.text-work')
  const phaseScene = new TimelineLite();

  phaseScene  
  .staggerFrom(titlephase,0.25,{x:-400, yoyo:true},0.1) 
  .from(imageIntro,0.5,{ width:0, ease:Expo.easeInOut},-0.3)
  .from(detailswork,0.2,{ x:-200,opacity:0})
  .from(detailsText,0.2,{ x:-200,opacity:0})
  const firstScenes = new ScrollMagic.Scene({
    triggerElement: titlephase
  })
  .setTween(phaseScene)
  .addTo(becentralController)
  
 
}
  render() {
    return (
      <div>
      <Background />
      <HeadlineH />
      <Background />
      <IntroductionH />
      
      <PhaseH />
    
        <Footer />
      </div>
    )
  }
}
export default Hive;