import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-section section" id="skills" >
        <div className="title-container">
          <h3>Skills</h3>
            <div className="skill-container">
                <div className="front-end-skills techno">
                <h4>Front-end Skills</h4>
                <div className="skills-content">
                <div className="tech">
                <i className="fab fa-angular"></i>
                <div>
              </div>
                </div>
                <div className="tech">
                <i className="fab fa-react"></i>
                <div>
              </div>
                </div>
                <div className="tech">
                <i className="fab fa-vuejs"></i>
                </div>
                <div className="tech">
                <i className="fab fa-sass"></i>
                </div>
                <div className="tech">
                <i className="fab fa-js"></i>
                </div>
                <div className="tech">
                <i className="fab fa-html5"></i>
                </div>
                </div>
                </div>
                <div className="full-stack-skills techno">
               
                <h4>Other Skills</h4>
                <div className="skills-content">
                <div className="tech">
                <i className="fab fa-python"></i>
                </div>
                <div>
                </div>
                <div className="tech">
                <i className="fab fa-node"></i>
                </div>
                <div className="tech">
                <i className="fab fa-webpack"></i>
                </div>
                <div className="tech">
                <i className="fab fa-git"></i>
                </div>
                <div className="tech">
                <i className="fab fa-php"></i>
                </div>
                </div>
              
                </div>
              
            </div>
        </div>
      </div>
    )
  }
}
