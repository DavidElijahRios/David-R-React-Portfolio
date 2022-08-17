import React, { useState } from "react";

function Contact () {
    const [ input, setInput] = useState('');
    const [ emailInput, setEmail] = useState('');
    const [ messageInput, setMessage ] = useState('');

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setInput(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "message") {
            setMessage(e.target.value);
        };
              console.log("********", e.target.value)
        if( e.target.value === null || e.target.value == "") {
            alert("all fields must be filled out!")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
        setEmail('');
        setMessage('');
    }

    return (
         <div>
            <form className="ContactForm" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="name"
                name="name"
                value={input}
                className="name-input"
                required
                onChange={handleChange}/>

                <input
                type="text"
                placeholder="email"
                name="email"
                value={emailInput}
                required
                className="email-input"
                onChange={handleChange}/> 

                <textarea
                type="text"
                placeholder="message"
                rows="5"
                required
                name="message"
                value={messageInput}
                className="message-input"
                onChange={handleChange}/> 

                <button className="submitBtn">Submit</button>
            </form>
         </div>
    );
}

export default Contact;