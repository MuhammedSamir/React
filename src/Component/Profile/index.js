import React, { Component } from 'react';
import {PortSection,PortTitle} from './style.js'
 import axios from 'axios';
class Profile extends Component  {
   state = {
     profiles: []
   }
   componentDidMount(){
     axios.get('js/data.json').then(res => {this.setState({profiles: res.data.profiles})})
   }
 
  render(){
     const {profiles} = this.state;
     const profileList = profiles.map((profileItem)=>{
       return(
         <span   key={profileItem.id}>
           {profileItem.name}
        </span>
       )
     });

    return (
      <PortSection>
        <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-5">
            <PortTitle>
               My Profile
            </PortTitle>
            <h4 className="text-white"><small>Name:</small> {profileList[0]} </h4>
            <h4 className="text-white"><small>Birthday:</small> {profileList[1]} </h4>
            <h4 className="text-white"><small>Address:</small> {profileList[2]} </h4>
            <h4 className="text-white"><small>Phone:</small> {profileList[3]} </h4>
            <h4 className="text-white"><small>Email:</small> {profileList[4]} </h4>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-7">
          <PortTitle>
               My Skills
            </PortTitle>
          <h6 className="text-white mb-3">Html</h6>
          <div className="progress mb-2" style={{height: "8px"}}>
          <div className="progress-bar bg-yellow" role="progressbar" style={{width: "80%",height: ""}} aria-valuenow="80"  aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h6 className="text-white mb-3">Css3</h6>
          <div className="progress mb-2" style={{height: "8px"}}>
          <div className="progress-bar bg-yellow" role="progressbar" style={{width: "75%",height: ""}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h6 className="text-white mb-3">Bootstrap</h6>
          <div className="progress mb-2" style={{height: "8px"}}>
          <div className="progress-bar bg-yellow" role="progressbar" style={{width: "80%",height: ""}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h6 className="text-white mb-3">React Js</h6>
          <div className="progress mb-2" style={{height: "8px"}}>
          <div className="progress-bar bg-yellow" role="progressbar" style={{width: "25%",height: ""}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        </div>
       
      
        </div>
      </PortSection>
    )
  }
    
  }
  


export default Profile;
