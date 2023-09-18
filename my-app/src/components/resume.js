import React from "react";

function Resume() {
    return(
        <div>
            <h1>Download My Resume</h1>
            <div>
            <a
            href={process.env.PUBLIC_URL + "/images/updatedResume.pdf"}
          download="updatedResume.pdf">
            Download My Resume{" "}
          </a>
            </div>

        <div>
            <h2>Skills</h2>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Sql</li>
            <li>MongoDb</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
        </div>
        </div>
    )
 }

 export default Resume;