import React from 'react';

import Info from './Info';
import Education from './Education';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';

import MediaQuery from 'react-responsive';

const info = {
    fname: 'Jeremiah-David',
    lname: 'Wreh',
    headline: '3rd Year Software Engineering Co-Op Student',
    education: 'Concordia University',
    location: {
        city: 'Montreal',
        state: 'Quebec',
        country: 'Canada',
    },
    summary: 'Welcome to my page! Here you\'ll find information about myself and my current projects. \nHave a look!',
}

const education = [
    {
        thumbnail: '../images/concordia_logo.png',
        school: 'Concordia University',
        degree: 'B.Eng',
        field: 'Software Engineering',
        start: '2016',
        end: 'Expected 2020'
    },
    {
        thumbnail: '../images/dawson_logo.png',
        school: 'Dawson College',
        degree: 'DEC',
        field: 'Pure & Applied Sciences',
        start: '2014',
        end: '2016'
    },
];

const work = [
    {
        thumbnail: '../images/nuance_logo.png',
        company: 'Nuance Communications',
        position: 'Software Development Intern (DevOps)',
        start: 'May. 2018',
        end: 'Aug. 2018',
    },
    {
        thumbnail: '../images/nuance_logo.png',
        company: 'Nuance Communications',
        position: 'Software Engineering Intern',
        start: 'Sept. 2017',
        end: 'Dec. 2017'
    }
];

const projects = [
    {
        thumbnail: '../images/rudating.png',
        title: 'RU Dating?',
        caption: 'A speed-dating app with human interaction in mind. No more mindless swiping!',
        summary: 'Flask, Socket.io',
        start: 'HackRU | October 6-7, 2018',
        url: 'https://github.com/ZacharyBys/rudating',
    },
    {
        thumbnail: '../images/caption_this.png',
        title: 'CaptionThis',
        caption: 'Share photos (Moments) with the world! Users can submit caption ideas for each Moment.',
        summary: 'Reactjs, Node.js (Hapi), Docker',
        start: 'January 2018 - March 2018',
        url: 'https://github.com/justin-cotarla/CaptionThis',
    },
    {
        thumbnail: '../images/wryss.jpg',
        title: 'WryssBot',
        caption: 'Won 2nd place overall at ConUHacks III',
        start: 'January 2018',
        summary: 'IBM Watson API, node-red',
        url: 'https://devpost.com/software/wryssbot',
    },
    {
        thumbnail: '../images/pokedex.png',
        title: 'PokeDex App',
        caption: 'A PokeDex web app created using React.',
        start: 'July 2017',
        summary: 'Pokéapi v2',
        url: 'https://tehblasian.github.io/poke-app'
    },
];

const Home = (props) => {
    const list = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between',
    }

    return (
        <div className='home-container'>
            <MediaQuery minDeviceWidth={769}>
                <ul className='main-list'> 
                    <li>
                        <Info info={info}/>
                    </li>
                    <li>
                        <ul className='horizontal'>
                            <li style={{display: 'flex'}}>
                                <Projects projects={projects}/>
                            </li>
                            <li>
                                <ul style={list}>
                                    <li>
                                        <Education education={education}/>
                                    </li>
                                    <li>
                                        <Work work={work}/>
                                    </li>
                                </ul>
                            </li>
                        </ul> 
                    </li> 
                    <li>
                        <Contact/>
                    </li> 
                </ul>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={768}>
                <ul className='main-list'> 
                    <li>
                        <Info info={info}/></li>
                    <li>
                        <Education education={education}/>
                    </li>
                    <li>
                        <Work work={work}/>
                    </li>  
                    <li>
                        <Projects projects={projects}/>
                    </li>  
                    <li>
                        <Contact/>
                    </li>           
                </ul>
            </MediaQuery>
        </div>
    )
}

export default Home;
