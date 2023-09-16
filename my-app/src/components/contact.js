import { useState } from "react";

/*import React from "react";
import { checkPassword } from '../utils/helper';
*/
function Contact() {
    const [ currentForm, setCurrentForm] = useState("Send")
    const onSubmit = (e) => {
        e.preventDefault()
        setCurrentForm('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email:email.value,
            message:message.value,
        }
        console.log(conFom)
    }

    


    return(
        <div>
            <h1>Contact</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Name
                    </label>
                    <input type="text" required/>
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" required/>
                </div>
                <div>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea required/>
                </div>
                <button type="submit">
                    {currentForm}
                </button>
            </form>
        </div>
    )
}

export default Contact;