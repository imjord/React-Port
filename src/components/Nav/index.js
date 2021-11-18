import React from 'react';
import './style.scss';

function Nav(){
    return(
        <div className="nav-bar-container border border-top-0 border-dark">
        <div className="left">
            Jordan Harper
        </div>
        <div className="right"> <ul> 
            <li><a  className="nav-link" href="/">Home </a></li>
             <li><a className="nav-link" href="Projects">Projects </a></li>
             <li><a className="nav-link" href="Skills">Skills </a></li>
             <li><a className="nav-link" href="Resume">Resume </a></li>
             </ul></div>
        </div>
    )
}

export default Nav;