import React from 'react';
// import githubIcon from '../../assets/icons/GitHub-Mark-Light-32px.png';
import passwordGenImg from '../../assets/Images/passwordgenerator.png';
import happyMealsImg from '../../assets/Images/happy-meals.png';
import workdaySchedulerImg from '../../assets/Images/workdayscheduler.png';
import noteTakerImg from '../../assets/Images/notetaker.png';
import budgetTrackerImg from '../../assets/Images/budgettracker.png';
import utgrImg from '../../assets/Images/UTGR.png';

function Project() {
    const work = [
        {
            title: 'Password Generator',
            appLink: 'https://hector-rangel.github.io/password-generator/',
            repoLink: 'https://github.com/hector-rangel/password-generator',
            languages: 'HTML, CSS, JavaScript',
            snapshot: passwordGenImg
        },
        {
            title: 'Happy Meals',
            appLink: 'https://jmol721.github.io/get-you-a-happy-meal-toy-not-included/',
            repoLink: 'https://github.com/jmol721/get-you-a-happy-meal-toy-not-included',
            languages: 'HTML, CSS, JavaScript, Foundation, APIs',
            snapshot: happyMealsImg
        },
        {
            title: 'Work Day Scheduler',
            appLink: 'https://hector-rangel.github.io/Work-Day-Scheduler/',
            repoLink: 'https://github.com/hector-rangel/Work-Day-Scheduler',
            languages: 'HTML, CSS, JavaScript',
            snapshot: workdaySchedulerImg
        },
        {
            title: 'Note Taker',
            appLink: 'https://murmuring-woodland-52300.herokuapp.com/',
            repoLink: 'https://github.com/hector-rangel/Note-Taker',
            languages: 'HTML, CSS, JavaScript',
            snapshot: noteTakerImg
        },
        {
            title: 'Budget Tracker',
            appLink: 'https://morning-peak-08645.herokuapp.com/',
            repoLink: 'https://github.com/hector-rangel/Budget-Tracker',
            languages: 'Mongoose, Compression, Express.js, Morgan',
            snapshot: budgetTrackerImg
        },
        {
            title: 'UTGR',
            appLink: 'https://majestic-mammoth-cave-33282.herokuapp.com/login',
            repoLink: 'https://github.com/ewebber283/utgr',
            languages: 'Node.js, Handlebars.js, MySQL, Express',
            snapshot: utgrImg
        },
    ];

    return (
        <div>
            {work.map(project => (
                <article key={project.title} style={{backgroundImage: `url(${project.snapshot})`}}>
                    <div>
                        <div key={project.title}>
                            <h3><a href={project.appLink}  className="appLink">{project.title}</a></h3>
                            {/* <a href={project.repoLink} target="_blank"><img src={githubIcon} style={{width: "30px", height: "30px"}} alt="" className="project-icon"></img></a> */}
                        </div>
                        <span className="project-info">{project.languages}</span>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Project;