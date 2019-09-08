import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';

const Main = () => {
    return (
        <div>
            <WelcomeSection />
            <AboutMe />
            <WorkExperience />
            <Projects />
        </div>
    );
};

export default Main;
