import React, { Component } from 'react'
import inauguration from './../assets/img/king-inauguration.png';

 class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <div className="container">
        <div className="img-wrapper">
        <div className="intro-img"></div>
        <div className="intro-content becentral-content"></div>
        </div>
        <div className="intro-description">
          <div className="title-container">
            <h4 className="title-container-item">Coworking space <br/> in Brussels</h4>
            </div>
            <p className="descriptions">
             Be-central is one of the biggest technologic hub in belgium at that point be central had a Wix website wich was very poot. So we my team and i have decided to rebuild and redesign everything here 's what happend' </p>
        </div>
        </div>
      </div>
    )
  }
}
export default Introduction;