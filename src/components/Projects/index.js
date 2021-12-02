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

// test

function Projects(){
    return(
        <div>
      <Carousel>
          <div className="image-box">
                    <img src={image1} alt="" />
                    <p className="legend">COINVRT</p>
                    <p> <a className="link" href="https://lukemchenry311.github.io/coinvrt/" target="_blank">Live Link</a></p>
                    <p> <a className="link" href="https://github.com/LukeMcHenry311/coinvrt" target="_blank">Repository</a></p>
                    
                    
                </div>
                
                <div>
                    <img src={image2} alt="" />
                    <p className="legend">Wayo</p>
                    <p> <a className="link" href="https://murmuring-thicket-79577.herokuapp.com/" target="_blank">Live Link</a></p>
                    <p> <a className="link" href="https://github.com/imjord/wayo" target="_blank">Repository</a></p>
                </div>
                <div>
                    <img src={image3} alt="" />
                    <p className="legend">Fooder</p>
                    <p> <a className="link" href="https://github.com/imjord/fooder_01" target="_blank">Live Link</a></p>
                    <p> <a className="link" href="https://github.com/imjord/fooder_01" target="_blank">Repository</a></p>
                </div>
                <div>
                    <img src={image4} alt="" />
                    <p className="legend">noSQL Backend - Deep Thoughts</p>
                    <p> <a className="link" href="https://github.com/imjord/NOSQL-SOCIAL-NETWORK-API" target="_blank">Repository</a></p>
                </div>
                <div>
                    <img src={image5} alt="" />
                    <p className="legend">Java GUI Guessing Game</p>
                    <p> <a className="link" href="https://github.com/imjord/GUI-Guessing-Game" target="_blank">Repository</a></p>
                </div>
                <div>
                    <img src={image6} alt="" />
                    <p className="legend">Note taker Node.js</p>
                    <p> <a className="link" href="https://github.com/imjord/node-noteTaker" target="_blank">Repository</a></p>
                </div>
                <div>
                    <img src={image7} alt="" />
                    <p className="legend">HTML Run Buddy</p>
                    <p> <a className="link" href="https://imjord.github.io/run-buddy/" target="_blank">Live Link</a></p>
                    <p> <a className="link" href="https://github.com/imjord/run-buddy" target="_blank">Repository</a></p>
                </div>
                
      </Carousel>
      <div className="description-container">
      <p><i>Here are some amazing projects that I created during my time at the U of U Coding Bootcamp. I was the sole backend developer for group projects like wayo and fooder.</i> </p>
      
      </div>
  
      </div>
    )
}

export default Projects;