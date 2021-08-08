import React from 'react';
// import coverImage from assets folder
import coverImage from "../../assets/sea.jpg";

function About() {
    return (
        <section>
            <h1>Hector is my name and coding is my game! Currently in a Bootcamp at The University of Texas at Austin learning to become a fullstack web developer.
            In my off time when I'm not coding I love to play basketball, video games and collect pokemon/sports cards!</h1>
            <img src={coverImage} className="" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;