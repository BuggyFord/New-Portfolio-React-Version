import { useState } from "react";
import { validateEmail } from "../utils/helper";

/*import React from "react";
import { checkPassword } from '../utils/helper';
*/
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!message){
            alert("Must input something in field");
            return;
        }
        if(validateEmail(email)) {
            alert("submitted");
        }
        else {
            alert("Invalid Email");
        }
    };

    return(
        <div>
            <h1 className="flex-center">Contact</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Name
                    </label>
                    <input 
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                    type="email" 
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                    id="message"
                    placeholder="Please enter a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">
                    
                </button>
            </form>
        </div>
    )
}

export default Contact;