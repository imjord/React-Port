import React from 'react';
import './style.scss';

function Nav(){
    return(
        <div className="nav-bar-container border border-top-0 border-dark">
        <div className="left">
            Jordan Harper
        </div>
        <div className="right"> <ul> 
            <li>About</li>
             <li>Projects</li>
             <li> Skills </li>
             <li>Contact</li>
             </ul></div>
        </div>
    )
}

export default Nav;