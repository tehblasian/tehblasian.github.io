import React from 'react'

import Container from '../components/Container';
import ImportantLinks from '../components/ImportantLinks';

const WelcomeSection = () => (
    <Container>
        <h1 className="header-large" style={{ marginBottom: 0 }}>jeremiah-david wreh</h1>
        <h1 className="header-medium-2" style={{ marginBottom: '1em' }}>{'{ montreal, canada }'}</h1>
        <ImportantLinks />
    </Container>
);

export default WelcomeSection;
