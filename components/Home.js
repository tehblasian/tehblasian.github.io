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
    summary: 'Welcome! Here you\'ll find information about myself and my current projects. \nHave a look!',
}

const education = [
    {
        thumbnail: '../assets/concordia_logo.png',
        school: 'Concordia University',
        degree: 'B.Eng',
        field: 'Software Engineering',
        start: '2016',
        end: 'Expected 2020'
    },
    {
        thumbnail: '../assets/dawson_logo.png',
        school: 'Dawson College',
        degree: 'DEC',
        field: 'Pure & Applied Sciences',
        start: '2014',
        end: '2016'
    },
];

const work = [
    {
        thumbnail: '../assets/ad.png',
        company: 'AppDirect',
        position: 'Software Developer Intern - Fullstack',
        start: 'May. 2019',
        end: 'Present',
    },
    {
        thumbnail: '../assets/nuance_logo.png',
        company: 'Nuance Communications',
        position: 'Software Development Intern (DevOps)',
        start: 'May. 2018',
        end: 'Aug. 2018',
    },
    {
        thumbnail: '../assets/nuance_logo.png',
        company: 'Nuance Communications',
        position: 'Software Engineering Intern',
        start: 'Sept. 2017',
        end: 'Dec. 2017'
    }
];

const projects = [
    {
        thumbnail: '../assets/santelogo.png',
        title: 'UberSanté',
        caption: 'An appointment scheduling system for clinics.',
        meta: 'Tech used: React, Flask, SQLite',
        start: 'February - March 2019 (course project)',
        url: 'https://github.com/chriskfwoo/big-uber-sante',
    },
    {
        thumbnail: '../assets/blockstory.png',
        title: 'BlockStory',
        caption: 'Collaborative storytelling on the Ethereum blockhain',
        meta: 'Tech used: React, Ethereum Smart Contracts, Solidity, Truffle, Metamask',
        start: 'HackCU V | February 23-24, 2019',
        url: 'https://devpost.com/software/blockstory',
    },
    {
        thumbnail: '../assets/vuforia-logo.png',
        title: 'PayAR',
        caption: 'An augmented reality self-checkout system.',
        meta: 'Tech used: Unity, Vuforia, Flask',
        start: 'McHacks 6 | February 2-3, 2019',
        url: 'https://devpost.com/software/pay-ar',
    },
    {
        thumbnail: '../assets/rudating.png',
        title: 'RU Dating?',
        caption: 'A speed-dating app with human interaction in mind. No more mindless swiping!',
        meta: 'Tech used: React, Flask, Socket.io',
        start: 'HackRU | October 6-7, 2018',
        url: 'https://devpost.com/software/rudating',
    },
    {
        thumbnail: '../assets/pokedex.png',
        title: 'PokeDex App',
        caption: 'A PokeDex web app created using React.',
        start: 'July 2017',
        meta: 'Tech used: React, Pokéapi v2',
        url: 'https://tehblasian.github.io/poke-app'
    },
];

const Home = (props) => {
    const list = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column', 
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
                </ul>
            </MediaQuery>
        </div>
    )
}

export default Home;
