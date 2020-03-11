import React from 'react';
import {HomeSection,Over,FontFamily,Btn,Imag,Float,Flex } from './style.js';
const Home = () => {
    return (
      <HomeSection className="home">
  
      <div className="container">
      <div className="row">
        <Flex className="col-md-6 col-xl-4 col-lg-5">
        <Over className="rounded pt-2">
      <h2 className="mb-3 mt-3 text-light">Mohamed Samir</h2>
        
        <article className="">
        <h3> 
          <FontFamily className=" text-capitalize d-block font-weight-bold">front end developer</FontFamily>
        </h3>
        <p className="mt-3 text-light">
           Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons,
            or any other element.  
           
        </p>
        </article>
       
       
        
        <Btn className="btn text-white mb-5 shadow-sm">let's Begain</Btn>
      </Over>
        </Flex>
    
        <div className="col-md-6 col-xl-8 col-lg-7">
        <Float>
          <Imag src="images/Home/banner.png" alt=""/>
        </Float>
        <div className="clearfix"></div>
        
        

        </div>
      </div>

     
       
      </div>
      </HomeSection>
    )
  }
  


export default Home;
