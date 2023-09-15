import React, {useState} from "react";
import projectPic from '../images/Screenshot 2023-09-12 at 6.14.16 PM.png';
import projectPic2 from '../images/Screenshot 2023-09-12 at 6.15.03 PM.png'
import { Link } from 'react-router-dom';

function Portfolio() {
    let projectsArr = [
{
    title:'PWA',
    image: '/Users/tylerjohnson/Desktop/bootcamp2/challenges/Challenge-FinalHW/New-Portfolio-React-Version/my-app/public/images/Screenshot 2023-09-12 at 6.16.17 PM.png',
    link: 'https://shielded-crag-21090-08b3f3cf5127.herokuapp.com/ ',
    github_link: 'https://github.com/BuggyFord/Num-19'

},
{
    title:'Borderline Incredible Weather App',
    image: '/Users/tylerjohnson/Desktop/bootcamp2/challenges/Challenge-FinalHW/New-Portfolio-React-Version/my-app/public/images/Screenshot 2023-09-12 at 6.19.02 PM.png',
    link: 'https://buggyford.github.io/Bordeline-Incredible-WeatherAPP/',
    github_link: 'https://github.com/BuggyFord/Bordeline-Incredible-WeatherAPP'

},
{
    title:'BA Travel',
    image: '/Users/tylerjohnson/Desktop/bootcamp2/challenges/Challenge-FinalHW/New-Portfolio-React-Version/my-app/public/images/Screenshot 2023-09-12 at 6.15.46 PM.png',
    link: ' https://pzhong1.github.io/BA-travel-/Links to an external site.',
    github_link: 'https://github.com/pzhong1/BA-travel-Links to an external site.'

},
{
    title:'Work Day Scheduler',
    image: '/Users/tylerjohnson/Desktop/bootcamp2/challenges/Challenge-FinalHW/New-Portfolio-React-Version/my-app/public/images/Screenshot 2023-09-12 at 6.15.03 PM.png',
    link: 'https://buggyford.github.io/Work-Day-9-5-power-hours/Links to an external site.',
    github_link: 'https://github.com/BuggyFord/Work-Day-9-5-power-hours.gitLinks to an external site.'

},
{
    title:'Code Quiz',
    image: 'my-app/public/images/Screenshot 2023-09-12 at 6.20.33 PM.png',
    link: 'https://buggyford.github.io/WIcked-Cool-Coding-Quiz/Links to an external site.',
    github_link: 'https://github.com/BuggyFord/WIcked-Cool-Coding-Quiz.gitLinks to an external site.'

},
{
    title:'Rocking Password Generator',
    image: 'images/Screenshot 2023-09-12 at 6.14.16 PM.png',
    link: ' https://buggyford.github.io/Tyler-Rockin-Password-Generator/Links to an external site.',
    github_link: 'https://github.com/BuggyFord/Tyler-Rockin-Password-GeneratorLinks to an external site.'

}
    ]



    const[projects, setProjects] = useState(projectsArr);

    return(
        <div>
            <div>
                <h1>My Portfolio</h1>
            </div>
            <p>{projectsArr[0].title}</p>

                {projects.map(item => (
                    <div>
                        <p>{item.title}</p>
                        <img src={projectPic}></img>
                        <a href={projects.link} target="_blank"/>
                        <a href={item.github_link} target="_blank"/>
                        
                        <p>{item.link}</p>
                        <p>{item.github_link}</p>
                    </div>
                ))} 
            
        </div>
    )
}

export default Portfolio;