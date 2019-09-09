import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import Employment from './Employment'

const EmploymentList = ({ employments }) => (
    <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none' }}>
        { 
            employments.map((employment) => (
                <li key={employment.date}>
                    <ScrollAnimation animateIn="fadeInUp">
                        <Employment {...employment} />
                    </ScrollAnimation>
                </li>)
            ) 
        }
    </ul>
)

export default EmploymentList;
