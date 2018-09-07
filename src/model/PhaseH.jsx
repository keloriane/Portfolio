import React, { Component } from 'react'
import coworking from './../assets/img/coworkingDesign.png'
import Integration from './../assets/img/becentralIntegrations.png'


export default class PhaseH extends Component {
   
  render() {
    
  


    return (
      <div className="section-container">
      <div className="phase1 phase-container phase">
   

      <div className="title-container">
      <h4 className="title-phase">Phase One:</h4>
      <h4 className="title-phase">Design</h4>
      </div>
      <div className="phase-wrapper">
        <div className="description">
        <span ><p className="details-work">Design with Figma</p></span>
          <p className="text-work">I worked with a UX UI designer to design the platform.I love using Figma because it allows you to work with several diferent persons together. We had a lot of page to design "Login Sign-In Projects Menus etc..."
            .To Design the layout we had few colors to work with. But my part was not the design for this project.
            My part was of course integration html css and Working with React and Django
          </p>
        </div>
       <div className="image-container">
        <img src={coworking} alt="" className="img"/>
       </div>
      </div>
    
  
    </div>
      <div className="phase2 phase-container phase">
   
      <div className="title-container">
      <h4 className='title-phase'>Phase Two:</h4>
      <h4 className='title-phase'>Development</h4>
      </div>
      <div className="container">
      <div className="phase-wrapper">
      <div className="image-container">
        <img src={Integration} alt="" className="img"/>
       </div>
        <div className="description">
        <span ><p className="details-works"> Mobile first</p></span>
          <p >I had never worked with Django and that was a first for me. I have decided to use React as my front-end framework. this is the one that i'm most used to.the platform is not yet available now because we are still working on it. 
              Creating the dataBase is the most difficult part of the project.
          </p>
        </div>
      </div>
      </div>
  
    </div>
    </div>
    )
  }
}
