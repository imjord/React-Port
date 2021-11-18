import React from 'react';
import './style.scss';
import ProgressBar from "@ramonak/react-progress-bar";


function Skills(){

  return(
  <div className="skills-container">
  HTML - Intermediate
    <ProgressBar bgColor="green" completed={85} />
  CSS - Intermediate
    <ProgressBar bgColor="green" completed={85} />
    Javascript - Intermediate
    <ProgressBar bgColor="green" completed={80} />
    Node - Intermediate
    <ProgressBar bgColor="green" completed={80} />
    MERN - Intermediate
    <ProgressBar bgColor="green" completed={75} />
    SQL - Beginner 
    <ProgressBar bgColor="#CCCC00	" completed={65} />
    noSQL - Beginner
    <ProgressBar bgColor="#CCCC00	" completed={65} />
    Java - Beginner
    <ProgressBar bgColor="#CCCC00" completed={55} />
    
  </div>
  )
}

export default Skills;


















