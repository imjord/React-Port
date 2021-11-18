import './style.scss';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/coinvrt.PNG'
import image2 from '../../assets/wayo.PNG';
import image3 from '../../assets/fooder.PNG';



function Projects(){
    return(
        <div>
      <Carousel>
          <div className="image-box">
                    <img src={image1} alt="" />
                    <p className="legend"><a href="https://lukemchenry311.github.io/weekly-group-project/" target="_blank">coinvrt</a></p>
                    
                </div>
                
                <div>
                    <img src={image2} alt="" />
                    <p className="legend">wayo</p>
                </div>
                <div>
                    <img src={image3} alt="" />
                    <p className="legend">fooder</p>
                </div>
                
      </Carousel>
      <div className="description-container">
      <p><i>These are 3 projects that I worked on during my time at the U of U Coding Bootcamp. For Wayo and Fooder I was the sole backend developer.</i> </p>
      
      </div>
  
      </div>
    )
}

export default Projects;