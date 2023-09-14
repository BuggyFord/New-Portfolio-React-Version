import React from "react";

function Navigation(props) {
    const { active, setActive} = props;

    const handleClick = (event) => {
        console.log("Event: ", event.target)
        console.log("Value: ", event.target.value)
        console.log("Text: ", event.target.textContent)
        // update the 'active' variable state
        setActive(event.target.value)
    }

    return(
        <nav>
            <h3>Nav Component</h3>
            <ul>
                <li>
                    <button onClick={() => setActive('about')} value="about">About Me</button>
                </li>
                <li>
                    <button onClick={handleClick} value="contact">Contact</button>
                </li>
                <li>
                    <button onClick={() => setActive('portfolio')}>Portfolio</button>
                </li>
                <li>
                    <button onClick={() => setActive('resume')}>Resume</button>
                </li>

            </ul>


        </nav>
    )
}

export default Navigation;