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
        <nav className="row">
            <h3 className="row name">Tyler Johnson</h3>
            <ul>
                <li className="butts row">
                    <button onClick={() => setActive('about')} value="about">About Me</button>
                </li>
                <li className="butts row">
                    <button  onClick={handleClick} value="contact">Contact</button>
                </li>
                <li className="butts row">
                    <button onClick={() => setActive('portfolio')}>Portfolio</button>
                </li>
                <li className="butts row">
                    <button onClick={() => setActive('resume')}>Resume</button>
                </li>

            </ul>


        </nav>
    )
}

export default Navigation;