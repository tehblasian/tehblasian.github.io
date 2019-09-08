import React from 'react'
import Project from './Project';

const ProjectList = ({ projects }) => (
    <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none' }}>
        { 
            projects.map((project) => (
                <li style={{ margin: '0.5em 0' }} key={project.date}>
                    <Project {...project} />
                </li>)
            ) 
        }
    </ul>
)

export default ProjectList;
