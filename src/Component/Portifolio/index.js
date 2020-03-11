 import React,{useState, useEffect} from 'react';
import {PortSection,PortTitle,Portli,Images,Over,Btn,Imag} from './style.js'
import axios from 'axios';
const Portifolio = () => {
  
  const [images, setImages]= useState([])
  useEffect(()=>{
    axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
  },[])
  const PortifolioImgs = images.map((imageItem)=>{
    return(
      <Images key={imageItem.id}>
      <Over><Btn className="btn shadow-sm border">Click</Btn></Over>
         <Imag className="shadow" src={imageItem.image} alt=""/>
      </Images>
    )
  })
    return (
      <PortSection className="text-center">
            <div className="container">
            <PortTitle className="text-white">My Portfolio</PortTitle>
            
            <ul className="list-inline mb-5">
              <Portli className="list-inline-item btn text-white shadow"  active >All</Portli>
              <Portli className="list-inline-item text-white  ">Html</Portli>
              <Portli className="list-inline-item text-white  ">Photoshop</Portli>
              <Portli className="list-inline-item text-white ">WordePress</Portli>
              <Portli className="list-inline-item text-white ">All</Portli>
            </ul>
            <div className="row mt-5">
              <div className="col-md-3">
                {PortifolioImgs[0]}
              </div>
              <div className="col-md-3">
                {PortifolioImgs[1]}
              </div>
              <div className="col-md-3">
                {PortifolioImgs[2]}
              </div>
              <div className="col-md-3">
                {PortifolioImgs[3]}
              </div>
              <div className="col-md-3">
                {PortifolioImgs[3]}
              </div>
              <div className="col-md-3">
                {PortifolioImgs[2]}
              </div>
              <div className="col-md-3">
                {PortifolioImgs[1]}
              </div>
              <div className="col-md-3">
                {PortifolioImgs[0]}
              </div>
             
            
            </div>
            </div>
            
           
      
      </PortSection>
    )
  }
  


export default Portifolio;
