import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-container">
         
            <div className='footer-items'>
            <i className="fas fa-phone"></i> <p>0494430347</p>
            </div>
             <div className='footer-items'>
            <i className="far fa-envelope"></i> <p>kevin.flbt@gmail.com</p>
            </div>
            <div className='footer-items'>
            <i className="fab fa-linkedin-in"></i> <a href="https://www.linkedin.com/in/kevin-flabat-420a74ba/"><p>Linkedin</p></a>
            </div>
      
        </div>
      </div>
    )
  }
}
