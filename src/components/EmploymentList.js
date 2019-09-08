import React from 'react'
import Employment from './Employment'

const EmploymentList = ({ employments }) => (
    <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none' }}>
        { 
            employments.map((employment) => (
                <li key={employment.date}>
                    <Employment 
                        companyLogo={employment.companyLogo}
                        companyName={employment.companyName}
                        title={employment.title}
                        date={employment.date} />
                </li>)
            ) 
        }
    </ul>
)

export default EmploymentList;
