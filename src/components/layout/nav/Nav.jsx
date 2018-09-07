import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';





 class Nav extends Component {
  render() {
    return (
      <div className="navContainer">
        <ul className="navBar">
            <li className="navItems"> <Link to="/#about" >Home</Link></li>
            <li className="navItems"> <Link to="/#path" >Services</Link></li>
            <li className="navItems"> <Link to="/#portfolio" >Portfolio</Link></li>
            <li className="navItems"> <Link to="/#skills" >Skills</Link></li>
            <li className="navItems"> <Link to="/#footer" >Contact</Link></li>
        </ul>
      </div>
    )
  }
}
export default Nav;