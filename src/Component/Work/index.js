import React, { Component } from 'react';
import axios from 'axios';
import {WorkSection,WorkTitle,Card,Span,Hr,CardTitle} from './style.js'
class Work extends Component{
 

    state = {
      works: []
    }
    componentDidMount(){
      axios.get('js/data.json').then( res =>{this.setState({works : res.data.works})})
    }
    render(){
      const {works} = this.state;
      const workList = works.map((workItem) => {
        return(
          <Card className="card  mb-2 shadow" key={workItem.id}>
          <div className="card-header bg-transparent border-0">
            <Span className={workItem.icon_name}></Span>
            <CardTitle className="card-title  pb-3 ">{workItem.title}</CardTitle>
            <Hr/>
          </div>
          <div className="card-body pb-5">
             <p className="pt-2 pb-4 text-light">
               {workItem.body}
             </p>
          </div>
          </Card>
        )
      })
    return (
      <WorkSection>
      <div className="container text-center">
        <WorkTitle className="">My Work</WorkTitle>
         <div className="row pt-5">
           <div className="col-12 col-md-12 col-lg-4">
            {workList[0]}
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            {workList[1]}
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            {workList[2]}
           </div>
         </div>
      </div>
       
      </WorkSection>
    )
  }
   
  }
  


export default Work;
