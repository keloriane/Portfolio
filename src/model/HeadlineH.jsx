import React, { Component } from 'react'
import HiveLogo from './../assets/img/hive-pentagon-amber.svg';

export default class HeadlineH extends Component {
  render() {
    return (
      <div className="head-line">
      <div className="logo-template wibicom-template">
          <img src={HiveLogo} alt="" className="logo"/>
      </div>
      <h1 className="head-line-title">OUR JOB WAS TO</h1>
      <h1 className="head-line-title">BUILD A MARKETPLACE FOR BLOCKCHAINE FREELANCE PROJECT</h1>

      <p className="describe">With my team, we worked together to do the layout design using Figma Photoshop and Illustrator.
      Because it was a landing page, we wanted to just use HTML CSS and Javascript.
      Ther was no need to put some heavy Javascript framework for just a one page.</p>
    </div>
    )
  }
}
