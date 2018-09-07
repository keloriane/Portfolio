import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './Canvas';
import Nav from '../nav/Nav';




class Header extends React.Component{
  state = {};
  
 
  render(){
    
    return( 
      
    <div>
    <Nav />
      <Canvas />  
    </div>
    )
  }
}

Header.defaultProps = {
  branding: 'My portfolio'
}
Header.propTypes = {
  branding: PropTypes.string.isRequired
}
export default Header;
