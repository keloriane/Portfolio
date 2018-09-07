import React, { Component } from 'react';
import './../App.scss';
import Header from './../components/layout/header/Header';
import { ReactDOM } from 'react-dom';
import Background from './../components/layout/background/Background';
import About from './../components/layout/about/About';
import Target from './../components/layout/target/Target';
import Portfolio from './../components/layout/portfolio/Portfolio'; 
import Skills from '../components/layout/skills/Skills';
import Panel from './../components/layout/panel/Panel';
import Footer from './../components/layout/footer/Footer';
import { TimelineLite, Expo, Back, TweenMax, TimelineMax } from 'gsap';

import ScrollMagic from 'ScrollMagic';
import 'debug.addIndicators';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import Rellax from 'rellax';


export default class Home extends Component {

  componentDidMount(){    

  //rellax init
  
  const rellax = new Rellax('.rellax');
  
  const controller = new ScrollMagic.Controller();
  const layout=document.querySelector('.layout-content')
  const title= document.querySelector('.presentation')
  const title1= document.querySelector('.presentationName')
  const tl = new TimelineLite();
  const imgProfil = document.querySelector('.img-container')
  tl
  .from(imgProfil,0.25,{width:0,ease: 'Quad.easeOut'})
  .from(title,0.3,{ x:"-50%", ease: Expo.easeInOut,opacity:0})
  .from(title1,0.3,{ x:"-50%", ease: Expo.easeInOut,opacity:0,delay:-0.40})
  .from(layout,1,{ width:0,ease: Expo.easeInOut,delay:-0.40, opacity:0})
  if (window.innerWidth<700) {
    controller.enabled(false);
  }
  const headerAnimation = new ScrollMagic.Scene({
        triggerElement: title,
        reverse:false
  
      })
         .setTween(tl)
         .addTo(controller)
  const sectionJourney = document.querySelector('.section-journey')
  const square = document.querySelector('.technology-items');
  const targazer = document.querySelector(".technology-container").querySelectorAll('.technology-items')
  const logo=document.getElementsByTagName('i');
  var blockAnimation = new TimelineLite();
      blockAnimation

       .staggerFrom(square,0.5,{y:150,opacity:0, ease:Expo.easeOut,yoyo:true},0.1)
       .staggerFrom(logo,0.5,{y:50,opacity:0, ease:Expo.easeOut,yoyo:true},0.1)
       const iconAnimation = new ScrollMagic.Scene({
          triggerElement:targazer,
          reverse: false
      
        })
           .setTween(blockAnimation)
           .addTo(controller)


  const titleSplit = document.querySelector('.title-split')
  const result = Splitting({target: titleSplit});
  const char = document.querySelectorAll('.char')
  const charsAnimation = new TimelineLite();
      charsAnimation
      .staggerFromTo(char, 1, 
  {ease: Back.easeOut.config(1), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1), opacity: 1, bottom: 0}, 0.05);
  const imgSlide = document.querySelectorAll('.slide__img-wrap')

const slideAnim = TweenMax.staggerFrom(imgSlide,0.5,{y:'100%', yoyo: true,ease:Expo.easeOut,yoyo:true},0.1)

  const portfolioScene = new ScrollMagic.Scene({
    triggerElement: titleSplit,
    reverse:false
    
  })
            
    .setTween([charsAnimation,slideAnim])
  .addTo(controller)

     
  
  const bullet = document.querySelectorAll('.bulletContainer')
  const textDescription = document.querySelectorAll('.work-description')
  const logoEnter = document.querySelectorAll('.logoEnter')

  const cardAnimation = new TimelineLite();
  
  cardAnimation
    .from(bullet,0.2,{width:0})
    .from(textDescription,0.2,{opacity:0})
    .from(logoEnter,0.2,{y:20,opacity:0})


        

           
  }
              
  render() {
    return (
      <div>        
      
      <Header branding="Portfolio Kevin Flabat" status="Junior Front-End Web Developer" />
      <Background />
      <About />
      <Background />
      <Target />
      <Background />
      <Background />
      <Portfolio />
      <Panel />
      <Skills />
      
   
      <Footer />
      </div>
    )
  }
}