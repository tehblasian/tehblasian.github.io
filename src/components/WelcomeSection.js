import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import Container from '../components/Container';
import ImportantLinks from '../components/ImportantLinks';

const WelcomeSection = () => (
    <Container>
        <ScrollAnimation animateIn="fadeInDown" style={{ textAlign: 'center' }}>
            <h1 className="header-large" style={{ marginBottom: 0 }}>jeremiah-david wreh</h1>
            <h1 className="header-medium-2" style={{ marginBottom: '1em' }}>{'{ montreal, canada }'}</h1>
            <ImportantLinks />
        </ScrollAnimation>
    </Container>
);

export default WelcomeSection;
