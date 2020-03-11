import React from 'react';
import './index.js'
import { Link } from 'react-router-dom';
import {TextShadow} from './style.js'

 const Navbar =()=>{
     return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-burbel shadow-sm fixed-top">
        <div className="container">

        
  <TextShadow className="navbar-brand text-capitalize py-2" href="/">First React App</TextShadow>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Portifolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">SocialMedia</a>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
    </ul>
   
  </div>
  </div>
</nav>
    </div>
     );
    

 }
 export default Navbar;