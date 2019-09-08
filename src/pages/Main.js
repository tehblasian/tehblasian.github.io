import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';

const Main = () => {
    return (
        <div>
            <WelcomeSection />
            <AboutMe />
            <WorkExperience />
        </div>
    );
};

export default Main;
