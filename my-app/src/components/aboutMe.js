import React from "react";
import profilePic from '../images/180534F2-B242-4A48-803B-EECFE4B1C7BB_1_105_c.jpeg';

function About() {
    return(
        <div>
            <h1>AboutMe</h1>

            <img src={profilePic}></img>

            <p>
                Hello! I'm Tyler Johnson a recent graduate of UTSA's full stack web development bootcamp
                and budding full stack web developer. Over the course of the last six months I have poured
                myself headlong into a field that I never imagined I would be in. I went from living as a 
                commercial and residential independent contractor who worked with my hands to find solutions
                to my customer's problems of construction and pest control needs by fixing homes structures 
                to prevent the entry of wildlife to working with my fingers and mind to find develop solutions
                for web applications. It has been a journey of many metaphorical steps and hard lessons
                painstakingly learned along the way but I have gained skills that are now far reaching and would
                revel in the opportunity to show you. 
            </p>


        </div>
    )
}

export default About;