import React from 'react'
import PropTypes from 'prop-types';

import Icon from './Icon';
import TagList from './TagList';

const Project = ({ thumbnail, name, summary, tech, date, source, devpost = null }) => (
    <span style={{ display: 'flex', flexDirection: 'column', margin: '0.5em' }}>
        <div className="project-header">
            <div className="project-logo-name">
                <Icon src={thumbnail} size="32px" alt={name} /> 
                <h1 className="header-medium-1" style={{ margin: '0 0 0 0.5em' }}>{name}</h1>
            </div>
            <div className="project-links">
                <a href={source} target="_blank" rel="noopener noreferrer">
                    <h1 className="header-small" style={{ marginLeft: '1em' }}>source</h1>
                </a>
                {devpost && <a href={devpost} target="_blank" rel="noopener noreferrer">
                    <h1 className="header-small" style={{ marginLeft: '1em' }}>devpost</h1>
                </a>}
            </div>
        </div>
        <h1 className="header-medium-2" style={{ margin: 0 }}>{summary}</h1>
        <h1 className="header-small">{date}</h1>
        <TagList tags={tech}/>
    </span>
)

Project.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tech: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    devpost: PropTypes.string,
};

export default Project;
