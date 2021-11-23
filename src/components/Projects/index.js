import './style.scss';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/coinvrt.PNG'
import image2 from '../../assets/wayo.PNG';
import image3 from '../../assets/fooder.PNG';
import image4 from '../../assets/thoughts.png';
import image5 from '../../assets/GUIguessinggame.PNG';
import image6 from '../../assets/node-backend-notes.PNG';
import image7 from '../../assets/runBuddy.PNG';



function Projects(){
    return(
        <div>
      <Carousel>
          <div className="image-box">
                    <img src={image1} alt="" />
                    <p className="legend"><a className="link" href="https://lukemchenry311.github.io/weekly-group-project/" target="_blank">COINVRT (Click for link)</a></p>
                    
                </div>
                
                <div>
                    <img src={image2} alt="" />
                    <p className="legend"><a className="link" href="https://murmuring-thicket-79577.herokuapp.com/" target="_blank">WAYO</a></p>
                </div>
                <div>
                    <img src={image3} alt="" />
                    <p className="legend"><a className="link" href="https://powerful-crag-64537.herokuapp.com/" target="_blank">FOODER</a></p>
                </div>
                <div>
                    <img src={image4} alt="" />
                    <p className="legend"><a className="link" href="https://github.com/imjord/NOSQL-SOCIAL-NETWORK-API" target="_blank">Deep Thoughts</a></p>
                </div>
                <div>
                    <img src={image5} alt="" />
                    <p className="legend"><a className="link" href="https://github.com/imjord/GUI-Guessing-Game" target="_blank">Java GUI Guessing Game</a></p>
                </div>
                <div>
                    <img src={image6} alt="" />
                    <p className="legend"><a className="link" href="https://github.com/imjord/node-noteTaker" target="_blank">Note Taker Backend</a></p>
                </div>
                <div>
                    <img src={image7} alt="" />
                    <p className="legend"><a className="link" href="https://imjord.github.io/run-buddy/index.html" target="_blank">Run Buddy HTML</a></p>
                </div>
                
      </Carousel>
      <div className="description-container">
      <p><i>Here are some amazing projects that I created during my time at the U of U Coding Bootcamp. I was the sole backend developer for group projects like wayo and fooder.</i> </p>
      
      </div>
  
      </div>
    )
}

export default Projects;