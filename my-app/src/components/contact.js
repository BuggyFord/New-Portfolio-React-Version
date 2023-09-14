import { useState } from "react";

/*import React from "react";
import { checkPassword } from '../utils/helper';
*/
function Contact() {
    const [ currentFrom, setCurrentFrom] = useState("");

    const { name, email, message } = currentFrom;


    return(
        <div>
            <h1>Contact Component</h1>
        </div>
    )
}

export default Contact;