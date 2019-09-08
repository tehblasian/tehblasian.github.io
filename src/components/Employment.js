import React from 'react'

import Icon from './Icon'

const Employment = ({ companyLogo, companyName, title, date, description }) => (
    <span style={{ display: 'flex', flexDirection: 'column', margin: '1em' }}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <Icon src={companyLogo} size="32px" alt={companyName} /> 
            <h1 className="header-medium-1" style={{ margin: '0 0 0 0.5em' }}>{companyName}</h1>
        </div>
        <h1 className="header-medium-2" style={{ margin: '0.2em 0'}}>{title}</h1>
        <h1 className="header-small" style={{ margin: 0 }}>{date}</h1>
        <h1 className="header-small">{description}</h1>
    </span>
)

export default Employment;
