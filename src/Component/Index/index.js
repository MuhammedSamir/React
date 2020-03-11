import React, { Component } from 'react';

import Home from '../Home/index';
import About from '../About/index';
import Portifolio from '../Portifolio/index';
import Profile from '../Profile/index';
import SocialMedia from '../SocialMedia/index';
import Work from '../Work/index';






class Index extends Component {
 
  
  render(){
    return (
      <div>
        <Home /> 
        <Work />
        <Portifolio />
        <Profile />
        <About />
        <SocialMedia />
       
      </div>
    );
  }
  
}

export default Index;
