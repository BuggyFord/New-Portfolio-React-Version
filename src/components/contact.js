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
                <div className="flex-center space">
                    <label className="flex-center space">
                        Name
                    </label>
                    <input 
                    className="space"
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex-center space">
                    <label htmlFor="email" className="flex-center space">
                        Email
                    </label>
                    <input
                    className="space"
                    type="email" 
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex-center space">
                    <label htmlFor="message" className="flex-center space">
                        Message
                    </label>
                    <textarea
                    id="message"
                    placeholder="Please enter a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="flex-center space">
                <button type="submit" >
                    Submit
                </button>
                </div>
              
            </form>
        </div>
    )
}

export default Contact;