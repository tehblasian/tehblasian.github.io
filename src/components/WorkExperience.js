import React from 'react'
import Emoji from 'react-emoji-render';

import Container from './Container';

import AD from '../assets/ad.png';
import Nuance from '../assets/nuance_logo.png';
import EmploymentList from './EmploymentList';

const employments = [
    {
        companyLogo: AD,
        companyName: 'AppDirect',
        title: 'Software Developer Intern - Full Stack',
        date: 'May 2019 - Present',
    },
    {
        companyLogo: Nuance,
        companyName: 'Nuance Communications',
        title: 'Software Developer Intern - DevOps',
        date: 'Fall 2017, Summer 2018',
    },
];

const WorkExperience = () => (
    <Container id="work-experience">
        <h1 className="header-large" style={{ margin: '0 0 1em 0' }}><Emoji text="work experience :muscle:"/></h1>
        <div style={{padding: '0 4em', width: '80%' }}>
            <EmploymentList employments={employments} />
        </div>
    </Container>
)

export default WorkExperience;
