import React from 'react'

import Icon from './Icon';

const LinkedIcon = ({ href, ...props }) => (
    <a className="linked-icon" href={href} target="_blank" rel="noopener noreferrer">
        <Icon {...props}/>
    </a>
)

export default LinkedIcon;
