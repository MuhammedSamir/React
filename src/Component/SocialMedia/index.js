import React, { Component } from 'react';
import axios from 'axios';
import {WorkSection,TransSection,Card,Span,Hr,CardTitle} from './style.js'
class Social extends Component{
 

    state = {
      social: []
    }
    componentDidMount(){
      axios.get('js/data.json').then( res =>{this.setState({social : res.data.social})})
    }
    render(){
      const {social} = this.state;
      const socialList = social.map((socialItem) => {
        return(
          <Card className="card  mb-2 shadow" key={socialItem.id}>
          <div className="card-header bg-transparent border-0">
            <Span className={socialItem.icon}></Span>
            <CardTitle className="card-title  pb-3 ">{socialItem.title}</CardTitle>
            <Hr/>
          </div>
          <div className="card-body pb-5">
             <p className="pt-2 pb-4 text-light">
               {socialItem.body}
             </p>
          </div>
          </Card>
        )
      })
    return (
      <WorkSection >
      <div className="container text-center">
      <TransSection className="trans">
      <div className="row">
           <div className="col-12 col-md-12 col-lg-4 ">
            {socialList[0]}
           </div>
           <div className="col-12 col-md-12 col-lg-4 ">
            {socialList[1]}
           </div>
           <div className="col-12 col-md-12 col-lg-4 ">
            {socialList[2]}
           </div>
         </div>
      </TransSection>
        
      </div>
       
      </WorkSection>
    )
  }
   
  }
  


export default Social;
