import React from 'react';
import githubIcon from '../../assets/icon/GitHub-Mark-64px.png';

function Footer() {
    return (
        <footer className="">
            <div>
                <a href="https://github.com/hector-rangel"><img src={githubIcon} alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/hector-rangel-0566b4207/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedInIcon" /></a>
                <a href="https://stackexchange.com/users/20767177/hector-rangel"><img src="https://raw.githubusercontent.com/akman47/portfolio-react/main/src/assets/icons/stack-icon.png" alt="StackIcon" /></a>
            </div>
        </footer>
    )
}

export default Footer;

