import React from "react";
import resume from "../images/updatedResume.pdf";
function Resume() {
    return(
        <div>
            <h1 className="flex-center">Download My Resume</h1>
            <span>
            <a
            className="flex-center resumeLink"
            href={resume}
          download="updatedResume.pdf">
            Download{" "}
          </a>
            </span>

        <div className="skills">
            <h2 className="flex-center">Skills</h2>
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