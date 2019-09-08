import React from 'react'

import Icon from './Icon';
import TagList from './TagList';

const Project = ({ thumbnail, name, summary, tech, date, source, devpost = null }) => (
    <span style={{ display: 'flex', flexDirection: 'column', margin: '0.5em' }}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <Icon src={thumbnail} size="32px" alt={name} /> 
            <h1 className="header-medium-1" style={{ margin: '0 0 0 0.5em' }}>{name}</h1>
            <a href={source} target="_blank" rel="noopener noreferrer">
                <h1 className="header-small" style={{ marginLeft: '1em' }}>source</h1>
            </a>
            {devpost && <a href={devpost} target="_blank" rel="noopener noreferrer">
                <h1 className="header-small" style={{ marginLeft: '1em' }}>devpost</h1>
            </a>}
        </div>
        <h1 className="header-medium-2" style={{ margin: 0 }}>{summary}</h1>
        <h1 className="header-small">{date}</h1>
        <TagList tags={tech}/>
    </span>
)

export default Project;
