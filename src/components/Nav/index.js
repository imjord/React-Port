import React, {useState} from 'react';
import './style.scss';
import { slide as Menu } from 'react-burger-menu'


function Nav(){

    const [navBarOpen, setNavBarOpen] = useState(false);

   
  function hamClick(e){
    e.preventDefault();
  }

    return(
        <div className="nav-bar-container">
        <div className="left">
            Jordan Harper
        </div>
        <div className="right"> <ul> 
            <li><a  className="nav-link" href="/">Home </a></li>
             <li><a className="nav-link" href="/Projects">Projects </a></li>
             <li><a className="nav-link" href="/Skills">Skills </a></li>
             <li><a className="nav-link" href="/Resume">Resume </a></li>

             <i class="fas fa-bars">


             <Menu className='fas'>
             <li><a  className="menu-item" href="/">Home </a></li>
             <li><a className="menu-item" href="/Projects">Projects </a></li>
             <li><a className="menu-item" href="/Skills">Skills </a></li>
             <li><a className="menu-item" href="/Resume">Resume </a></li>
             <a onClick={ hamClick } className="menu-item--small" href=""></a>
        </Menu>
        </i>


             </ul></div>
        </div>
    )
}

export default Nav;