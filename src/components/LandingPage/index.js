import React, {useEffect, useRef} from "react";
import './style.scss';
import {init} from 'ityped';



function LandingPage(){
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Web Developer", "Software Engineer"],
            typeSpeed: 200
        })
    }, []);
    return(
        <div className="container">
            <div className="landing-left">
            
            </div>
            <div className="landing-right">
                Welcome to my portfolio!
                My name is Jordan and I'm a Junior <span ref={textRef}></span>
            </div>
            
        </div>
    )
}

export default LandingPage;