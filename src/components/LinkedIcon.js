import React from 'react'
import PropTypes from 'prop-types';

import Icon from './Icon';

const LinkedIcon = ({ href, ...props }) => (
    <a className="linked-icon" href={href} target="_blank" rel="noopener noreferrer">
        <Icon {...props}/>
    </a>
)

LinkedIcon.propTypes = {
    href: PropTypes.string.isRequired,
};

export default LinkedIcon;
