import React from 'react';

function Resume() {
    return (
        <section>
            <h1>Resume</h1>
            {/* just a view resume still need to figure out how to download it. couldn't make a href with assets work */}
            <a href="https://docs.google.com/document/d/1QEHCDVIsNCKJezwJ1qekIsFGfnmsEO7j/edit" alt="">View Resume</a>
            <br></br>
            <span>Front End Proficiencies</span>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <span>Back End Proficiencies</span>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MonoDV,Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
    )
}

export default Resume;