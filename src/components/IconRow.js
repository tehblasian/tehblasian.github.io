import React from 'react'

const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
};

const iconStyle = {
    margin: '0 0.5em',
};

const IconRow = ({ children }) => {
    return (
        <ul style={listStyle}>{children.map((icon, index) => <li key={index} style={iconStyle}>{icon}</li>)}</ul>
    );
};

export default IconRow;
