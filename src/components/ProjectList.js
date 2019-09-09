import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import Project from './Project';

const ProjectList = ({ projects }) => (
    <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none' }}>
        { 
            projects.map((project) => (
                <li style={{ margin: '0.5em 0' }} key={project.date}>
                    <ScrollAnimation animateIn="slideInLeft" duration={0.5}>
                        <Project {...project} />
                    </ScrollAnimation>
                </li>)
            ) 
        }
    </ul>
)

export default ProjectList;
