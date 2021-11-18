import React from 'react';
import './style.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){  





    return(
        <div className="footer-container">
          
        <div className="left"><a href="https://github.com/imjord" target="_blank"><GitHubIcon/></a>
            </div>
            <div className="right"><a href="https://www.linkedin.com/in/imjord/" target="_blank"> <LinkedInIcon/> </a></div>
            </div>
        
    )
}

export default Footer;