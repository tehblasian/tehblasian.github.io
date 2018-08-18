import React from 'react';
import ListItem from './ListItem';

const Work = (props) => {
    const { work } = props;
    return (
        <div className='work-container'>
            <h1 className='section-header'>Work Experience</h1>
            <ul>
            {
                work.map((entry, index) => {
                    return (
                        <li key={entry.company}>
                            <ListItem
                                thumbnail={entry.thumbnail}
                                title={entry.company}
                                subtitle={entry.position}
                                date={entry.start + ' - ' + entry.end}/>
                                {work.length - index > 1 && <div className='line-separator' style={{marginBottom: '1em', width: '100%'}}></div>}   
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Work;
