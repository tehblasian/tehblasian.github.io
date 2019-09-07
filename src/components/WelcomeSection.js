import React from 'react'

import Container from '../components/Container';
import ImportantLinks from '../components/ImportantLinks';

const WelcomeSection = () => (
    <Container>
        <h1 style={{ marginBottom: 0 }}>Jeremiah-David Wreh</h1>
        <h1 style={{ fontSize: '16px', fontWeight: 100, marginBottom: '1em' }}>{'{ Montreal, Canada }'}</h1>
        <ImportantLinks />
    </Container>
);

export default WelcomeSection;
