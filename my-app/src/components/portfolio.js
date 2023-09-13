import React, {useState} from "react";

function Portfolio() {
    let projectsArr = [
{
    title:'PWA',
    image: '',
    link: 'https://shielded-crag-21090-08b3f3cf5127.herokuapp.com/ ',
    github_link: 'https://github.com/BuggyFord/Num-19'

},
{
    title:'Borderline Incredible Weather App',
    image: '',
    link: 'https://buggyford.github.io/Bordeline-Incredible-WeatherAPP/',
    github_link: 'https://github.com/BuggyFord/Bordeline-Incredible-WeatherAPP'

},
{
    title:'BA Travel',
    image: '',
    link: ' https://pzhong1.github.io/BA-travel-/Links to an external site.',
    github_link: 'https://github.com/pzhong1/BA-travel-Links to an external site.'

},
{
    title:'Work Day Scheduler',
    image: '',
    link: 'https://buggyford.github.io/Work-Day-9-5-power-hours/Links to an external site.',
    github_link: 'https://github.com/BuggyFord/Work-Day-9-5-power-hours.gitLinks to an external site.'

},
{
    title:'Code Quiz',
    image: '',
    link: 'https://buggyford.github.io/WIcked-Cool-Coding-Quiz/Links to an external site.',
    github_link: 'https://github.com/BuggyFord/WIcked-Cool-Coding-Quiz.gitLinks to an external site.'

},
{
    title:'Rocking Password Generator',
    image: '',
    link: ' https://buggyford.github.io/Tyler-Rockin-Password-Generator/Links to an external site.',
    github_link: 'https://github.com/BuggyFord/Tyler-Rockin-Password-GeneratorLinks to an external site.'

}
    ]



    const[projects, setProjects] = useState(projectsArr);

    return(
        <div>

            <p>{projectsArr[0].title}</p>

                {projects.map(item => (
                    <div>
                        <p>{item.title}</p>
                        <img src={item.image} alt=""/>
                        <p>{item.link}</p>
                        <p>{item.github_link}</p>
                    </div>
                ))} 
            
        </div>
    )
}

export default Portfolio;