import React from 'react';
import './style.css';

function Nav(){
    return(
        <div className="nav-bar-container border border-top-0 border-dark">
        <div className="left">
            This is left side in container
        </div>
        <div className="right"> this is the right side of the container</div>
        </div>
    )
}

export default Nav;