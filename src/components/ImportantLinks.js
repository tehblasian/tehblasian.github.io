import React from 'react'

import Icon from './Icon';
import IconRow from './IconRow';

import LinkedInLogo from '../assets/linkedin.png';
import GitHubLogo from '../assets/github.png';
import ResumeIcon from '../assets/cv.png';

const ImportantLinks = () => (
    <IconRow>
        <Icon src={LinkedInLogo} alt="LinkedIn logo" />
        <Icon src={GitHubLogo} alt="GitHub logo" />
        <Icon src={ResumeIcon} alt="Resume icon" />
    </IconRow>
)

export default ImportantLinks;
