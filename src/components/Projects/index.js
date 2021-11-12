
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



function Projects(){
    return(
      <Carousel>
          <div>
                    <img src="../../assets/coinvrt.PNG" />
                    <p className="legend">coinvrt</p>
                </div>
                <div>
                    <img src="../../assets/wayo.PNG" />
                    <p className="legend">wayo</p>
                </div>
                <div>
                    <img src="../../assets/fooder.PNG" />
                    <p className="legend">fooder</p>
                </div>
      </Carousel>
    )
}

export default Projects;