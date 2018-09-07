import React, { Component } from 'react';
import profil from './../../../assets/img/profil.png';





const style = {
 maxWidth:'500px' ,
 overflow:'hidden',
 position:'relative',
 width:'100%',

}



class About extends Component {

  
  render() {
    
     return (
       <div className="section about-section" id="about">
     
       <div className="ref-container">
       <div  className="title-container rellax" data-rellax-speed="-1">
       <h3 className='presentation' >Hello</h3><br/>
       <div className="line"></div>
       <h3 className='presentationName' >i'm Kevin</h3>
       </div>
      
       <div className="about-text">

        <p className="description rellax" data-rellax-speed="-2">i’m a junior web front end developer and a designer based in Brussels. I try my best to be polyvalent on the web but there are so many things to cover that i ‘ve decided to focus on web design and front-end developement.</p>
       </div>
       </div>
       <div className="profil-container rellax" data-rellax-speed="-1.5">
       <div className="img-container" style= {style}>
       <img src={profil} alt="" className="profile"/>
       </div>
    </div>
       <div className="layout-content rellax" data-rellax-speed="0,5">
       </div>
      
       </div>
      )
    }
  }
export default About;

//ref={div => this.animationLayout = div}