import React from 'react';


function Contact(){
    return(
        <div>Hey thank you for visiting my portfolio! If you would like to say hello heres a neat form for ya!
            <form>
                <input type="text" placeholder="name"></input>
                <input type="text" placeholder="email"></input>
                <textarea type="text" placeholder="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;