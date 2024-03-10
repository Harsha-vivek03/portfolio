import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css'
const Header = (props) => {
  return (
    
    <div className="header">
      
      <div className="head">
      <h2>{props.name}....</h2>
      <ul className="navs">
        <li><Link className="links" to="/portfolio" >Home</Link></li>
        <li><Link className="links" to="/portfolio/contact"> Contact</Link></li>
      </ul>
      </div>
   
    </div>
  )
}

export default Header
