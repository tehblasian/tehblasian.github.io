import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import WelcomeSection from '../components/WelcomeSection';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import SideNav from '../components/SideNav';

const Main = () => {
    return (
        <div>
            <SideNav>
                <NavLink 
                    smooth 
                    to="/#about-me" 
                    activeClassName="navlink-active" 
                    location={{pathname: document.location.pathname + document.location.hash}}>
                        about me
                </NavLink>
                <NavLink
                    smooth
                    to="/#work-experience"
                    activeClassName="navlink-active"
                    location={{pathname: document.location.pathname + document.location.hash}}>
                        work experience
                </NavLink>
                <NavLink 
                    smooth
                    to="/#projects"
                    activeClassName="navlink-active"
                    location={{pathname: document.location.pathname + document.location.hash}}>
                        recent projects
                </NavLink>
            </SideNav>
            <WelcomeSection />
            <AboutMe />
            <WorkExperience />
            <Projects />
        </div>
    );
};

export default Main;
