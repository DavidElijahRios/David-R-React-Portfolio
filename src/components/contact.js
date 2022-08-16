import React, { useState } from "react";

function Contact () {
    const [ input, setInput] = useState('');
    const [ emailInput, setEmail] = useState('');

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setInput(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        console.log('*********', e.target.name)
    }

    return (
         <div>
            <form className="ContactForm">
                <input
                type="text"
                placeholder="name"
                name="name"
                value={input}
                className="name-input"
                onChange={handleChange}/>

                <input
                type="text"
                placeholder="email"
                name="email"
                value={emailInput}
                className="email-input"
                onChange={handleChange}/> 
            </form>
         </div>
    );
}

export default Contact;