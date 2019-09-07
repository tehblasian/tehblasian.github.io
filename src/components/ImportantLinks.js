import React from 'react'

import LinkedIcon from './LinkedIcon';
import IconRow from './IconRow';

import LinkedInLogo from '../assets/linkedin.png';
import GitHubLogo from '../assets/github.png';
import ResumeIcon from '../assets/cv.png';

import Resume from '../assets/resume_regular.pdf';

const ImportantLinks = () => (
    <IconRow>
        <LinkedIcon src={LinkedInLogo} href="https://www.linkedin.com/in/jeremiah-david-wreh/" alt="LinkedIn logo" />
        <LinkedIcon src={GitHubLogo} href="https://www.github.com/tehblasian" alt="GitHub logo" />
        <LinkedIcon src={ResumeIcon} href={Resume} alt="Resume icon" />
    </IconRow>
)

export default ImportantLinks;
