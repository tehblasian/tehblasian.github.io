import React from 'react'
import Emoji from 'react-emoji-render';

import Container from './Container';

import ProfilePicture from '../assets/me.jpg';

const AboutMe = () => (
    <Container>
        <h1 style={{ fontSize: '42px', margin: '0 0 1.5em 0' }}>About Me</h1>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '0 4em', width: '80%' }}>
            <img style={{ maxWidth: '40%', height: 'auto' }} src={ProfilePicture} alt="Profile"/>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'justify', wordBreak: 'break-word' }}>
                <p style={{ margin: '0.5em 0', padding: '0 2em', fontSize: '1.5vw' }}>
                    I'm a Software Engineering student in my final year of study at Concordia University, located in Montreal, Canada. 
                </p>
                <p style={{ margin: '0.5em 0', padding: '0 2em', fontSize: '1.5vw' }}>
                    I have experience with web technologies such as React/Redux, Node.js, GraphQL, and Flask, 
                    and have experience developing in Java and Python.
                </p>
                <p style={{ margin: '0.5em 0', padding: '0 2em', fontSize: '1.5vw' }}>
                    <Emoji text="My hobbies include playing and writing music (fun fact: I've been playing piano since I was 6 years old!), powerlifting, and follwing the NBA (#WETHECHAMPS)!:musical_keyboard::weight_lifter::basketball:"/>
                </p>
            </div>
        </div>
    </Container>
)

export default AboutMe;
