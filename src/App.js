import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Component/Navbar/index';
import Contact from './Component/Contact/index';
import Index from './Component/Index/index';
import Footer from './Component/Footer/index';
import Spinner from './Spiner/Spiner'






class App extends Component {
  state ={
    loading : false,
  }
  render(){
    let index =  <Route exact path='/' component={Index} />;
    if( this.state.loading){
      index = <Spinner />
    }
    return (
      <div>
        
     <Router>
     <Navbar />
       {index}
        <Route path='/contact' component={Contact} />
        <Footer/>
     </Router>
    </div>
     
    );
  }
  
}

export default App;
