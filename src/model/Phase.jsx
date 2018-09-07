import React, { Component } from 'react'
import coworking from './../assets/img/coworkingDesign.png'
import Integration from './../assets/img/becentralIntegrations.png'
import Mobile from './../assets/img/mobile.png'

export default class Phase extends Component {
  constructor(props){
    super(props);
    this.state= {
      sections: [
        {
          id:1,
          title: 'Phase One',
          subtitle: '',
          image: "",
          sectionTitle: '',
          description: ''
        },
        {
          id:2,
          title: 'Phase Two',
          subtitle: 'Integration',
          image: "",
          sectionTitle: 'Mobile First',
          description:'Phase 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        }
      ]
    }
  }
    
  render() {
    const { sections } = this.state;
  


    return (
      <div className="section-container">
      <div className="phase1 phase-container phase">
   

      <div className="title-container">
      <h4 className="title-phase">Phase One</h4>
      <h4 className="title-phase">Design</h4>
      </div>
      <div className="phase-wrapper">
        <div className="description">
        <span ><p className="details-work">Design with Figma</p></span>
          <p className="text-work">
          We use the figma tool to design the layouts of the website. We used it because it is a cross platform design tool and we where working on Linux Windows and Mac at the same time on the same layout
          We where three students from Becode to work on this project. We had to rebuild everything. It took us three months to finish this project. Main problem was that the CEO of Becentral changed her mind everytime. And our first mistake was to not saying stop and let her change the content of the design</p>
        </div>
       <div className="image-container">
        <img src={coworking} alt="" className="img"/>
       </div>
      </div>
    
  
    </div>
      <div className="phase2 phase-container phase">
   
      <div className="title-container">
      <h4 className='title-phase'>Phase Two</h4>
      <h4 className='title-phase'>integration</h4>
      </div>
      <div className="container">
      <div className="phase-wrapper">
      <div className="image-container">
        <img src={Mobile} alt="" className="img"/>
       </div>
        <div className="description">
        <span ><p className="details-works"> Mobile first</p></span>
          <p >Phase 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      </div>
  
    </div>
    </div>
    )
  }
}
