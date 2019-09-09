import React from 'react'
import Emoji from 'react-emoji-render';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from './Container';

import ProfilePicture from '../assets/me.jpg';

const AboutMe = () => (
    <Container id="about-me">
        <ScrollAnimation animateIn="fadeIn">
            <h1 className="header-large" style={{ margin: '0 0 1em 0' }}>about me</h1>
        </ScrollAnimation>
        <div className="about-me" style={{ display: 'flex', padding: '0 4em', width: '80%' }}>
            <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" duration={0.7}>
                <img className="profile-pic" src={ProfilePicture} alt="Profile"/>
            </ScrollAnimation>
            <div className="header-medium-2" style={{ display: 'flex', flexDirection: 'column', textAlign: 'justify', wordBreak: 'break-word' }}>
                <p style={{ margin: '0.5em 0' }}>
                    I'm a Software Engineering student in my final year of study at Concordia University, located in Montreal, Canada. 
                </p>
                <p style={{ margin: '0.5em 0' }}>
                    I have experience with web technologies such as React/Redux, Node.js, GraphQL, and Flask, 
                    and have experience developing in Java and Python.
                </p>
                <p style={{ margin: '0.5em 0' }}>
                    <Emoji text="My hobbies include playing and writing music, powerlifting, and following the NBA (#WETHECHAMPS)!:musical_keyboard::weight_lifter::basketball:"/>
                </p>
            </div>
        </div>
    </Container>
)

export default AboutMe;
