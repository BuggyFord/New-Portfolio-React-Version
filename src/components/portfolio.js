import React, {useState} from "react";
import projectPic from '../images/Screenshot 2023-09-12 at 6.14.16 PM.png';
import projectPic2 from '../images/Screenshot 2023-09-12 at 6.15.03 PM.png';
import projectPic3 from '../images/Screenshot 2023-09-12 at 6.15.46 PM.png';
import projectPic4 from '../images/Screenshot 2023-09-12 at 6.16.17 PM.png';
import projectPic5 from '../images/Screenshot 2023-09-12 at 6.19.02 PM.png';
import projectPic6 from '../images/Screenshot 2023-09-12 at 6.20.33 PM.png';
import projectPic7 from '../images/Screenshot 2023-10-03 at 7.51.10 PM.png'

function Portfolio() {
    let projectsArr = [
{
    title:'PWA',
    image: projectPic4,
    link: 'https://shielded-crag-21090-08b3f3cf5127.herokuapp.com/ ',
    github_link: 'https://github.com/BuggyFord/Num-19'

},
{
    title:'Borderline Incredible Weather App',
    image: projectPic5,
    link: 'https://buggyford.github.io/Bordeline-Incredible-WeatherAPP/',
    github_link: 'https://github.com/BuggyFord/Bordeline-Incredible-WeatherAPP'

},
{
    title:'BA Travel',
    image: projectPic3,
    link: ' https://pzhong1.github.io/BA-travel-',
    github_link: 'https://github.com/pzhong1/BA-travel-'

},
{
    title:'Work Day Scheduler',
    image: projectPic2,
    link: 'https://buggyford.github.io/Work-Day-9-5-power-hours/',
    github_link: 'https://github.com/BuggyFord/Work-Day-9-5-power-hours.git'

},
{
    title:'Code Quiz',
    image: projectPic6,
    link: 'https://buggyford.github.io/WIcked-Cool-Coding-Quiz/',
    github_link: 'https://github.com/BuggyFord/WIcked-Cool-Coding-Quiz.git'

},
{
    title:'Rocking Password Generator',
    image: projectPic,
    link: ' https://buggyford.github.io/Tyler-Rockin-Password-Generator/',
    github_link: 'https://github.com/BuggyFord/Tyler-Rockin-Password-Generator'

}, 

{
    title: 'Music Verse',
    image: projectPic7,
    link: 'https://music-verse2-57f59708a605.herokuapp.com/',
    github_link: 'https://github.com/pzhong1/Music-Verse'
}

    ]



    const[projects, setProjects] = useState(projectsArr);

    return(
        <div>
            <div>
                <h1 className="flex-center" id="portTitle">My Portfolio</h1>
            </div>

                {projects.map(item => (
                    <div >
                        <h2 className="projTitle">{item.title}</h2>
                        <a href={item.github_link} target="_blank" rel="noreferrer" className="depLink">GitHub</a>
                        <a href={item.link} target="_blank" rel="noreferrer" className="depLink">Deployed</a>
                        <img className="portPic" src={item.image}></img>
                     
                    </div>
                ))} 
            
        </div>
    )
}

export default Portfolio;