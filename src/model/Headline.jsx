import React, { Component } from 'react'


import BecentralLogo from './../assets/img/Becentra-logol.png';


class Headline extends Component {
  render() {

    return (

      
      <div className="head-line">
      <div className="logo-template wibicom-template">
          <img src={BecentralLogo} alt="" className="logo"/>
      </div>
      <h1 className="head-line-title">OUR JOB WAS TO</h1>
      <h1 className="head-line-title">REBUILD&REDESIGNED THE WEBSITE</h1>

      <p className="describe">With my team, we worked together to do the layout design using Figma Photoshop and Illustrator.
      Because it was a landing page, we wanted to just use HTML CSS and Javascript.
      Ther was no need to put some heavy Javascript framework for just a one page.</p>
      <div className="button ">
      <a href="https://www.becentral.org/">get to the website </a>
      </div>
    </div>
      
    )
  }
}
export default Headline;