import React from 'react';
import './style.scss';
import ProgressBar from "@ramonak/react-progress-bar";


function Skills(){

  return(
  <div className="skills-container">
    HTML
    <ProgressBar bgColor="orange" completed={85} />; 
    CSS
    <ProgressBar bgColor="blue" completed={85} />;
    Javascript
    <ProgressBar bgColor="yellow" completed={85} />;
    Node
    <ProgressBar bgColor="Gray" completed={85} />;
    SQL
    <ProgressBar bgColor="dark blue" completed={85} />;
    noSQL
    <ProgressBar bgColor="teal" completed={85} />; 
    HTML
    <ProgressBar bgColor="orange" completed={85} />;
    HTML
    <ProgressBar bgColor="orange" completed={85} />;
    HTML
    <ProgressBar bgColor="orange" completed={85} />;
  </div>
  )
}

export default Skills;


















