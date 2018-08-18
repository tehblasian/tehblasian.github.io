import React from 'react';
import ListItem from './ListItem';

const Education = (props) => {
    const education = props.education;
    const eduStyle = { 
        display: 'block', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: '1em', 
        width: '95%'
    };
    return (
        <div className='education-container'>
            <h1 className='section-header'>Education</h1>
            <ul>
            {
                education.map((entry, index) => {
                    return ( 
                        <li key={entry.school}>
                            <ListItem
                                thumbnail={entry.thumbnail}
                                title={entry.school}
                                subtitle={entry.degree + ', ' + entry.field}
                                date={entry.start + ' - ' + entry.end}/>
                                {education.length - index > 1 && <div className='line-separator' style={eduStyle}></div>}   
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Education;
