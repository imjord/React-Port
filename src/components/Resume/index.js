import React from 'react';
import './style.scss';
import NoteIcon from '@mui/icons-material/Note';


function Resume(){
    return(
        <div className="container">
             
            <div className="left"><i>
            Hey thank you for visiting my portfolio! If you would like to see my resume. Click the note! Email: Jordanharperjs@gmail.com
               </i></div>
              
            <div className="right">
            <a href="https://docs.google.com/document/d/1T6D4e4ECXR3YcMbVqCPjSnIj26LHT9_vbyT3WdDVanw/edit?usp=sharing" target="_blank"><NoteIcon/></a>
            </div>
      
        </div>
    )
}

export default Resume;