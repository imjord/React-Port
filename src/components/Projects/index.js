
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/coinvrt.PNG'
import image2 from '../../assets/wayo.PNG';
import image3 from '../../assets/fooder.PNG';



function Projects(){
    return(
      <Carousel>
          <div>
                    <img src={image1} alt="" />
                    <p className="legend">coinvrt</p>
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
    )
}

export default Projects;