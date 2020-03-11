import React from 'react';
import{AboutMe ,AboutTitle,AboutP,Imag, FontFamily,Flex} from './style.js';
const About = () => {
    return (
      <AboutMe className="">
      
        <div className="container">
        <AboutTitle className="text-center text-white">About Me</AboutTitle>
          <AboutP className="text-center text-white ml-auto mr-auto">
                  ArchitectUI comes packed with elements,
                  components and widgets nicely bundled together
           </AboutP>
        <div className="row  mt-5">
          <Flex className="col-md-12 col-lg-6">
          <article>
          <h2 className="text-white mb-3">This is Me</h2>
              <h3>
                <FontFamily className="text-capitalize d-block font-weight-bold">front end developer</FontFamily>
              </h3>
              <p className="text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Enim est explicabo maxime 
              quibusdam quaerat nihil aliquid aperiam deleniti, 
              repellendus dolorum.
               Possimus nisi cupiditate ad veritatis?
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. 
                </p>
          </article>
             
          </Flex>
          <div className="col-md-12 col-lg-6">
            <Imag src="images/Home/about.png" alt=""/>
          </div>
        </div>
         
        </div>  
      </AboutMe>
    )
  }
  


export default About;
