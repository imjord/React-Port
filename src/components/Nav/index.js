import React from 'react';
import './style.scss';

function Nav(){
    return(
        <div className="nav-bar-container">
        <div className="left">
            Jordan Harper
        </div>
        <div className="right"> <ul> 
            <li><a  className="nav-link" href="/React-Port/">Home </a></li>
             <li><a className="nav-link" href="/React-Port/Projects">Projects </a></li>
             <li><a className="nav-link" href="/React-Port/Skills">Skills </a></li>
             <li><a className="nav-link" href="/React-Port/Resume">Resume </a></li>
             </ul></div>
        </div>
    )
}

export default Nav;