import React from 'react';
import ListItem from './ListItem';

const Projects = (props) => {
    const { projects } = props;
    return (
        <div className='projects-container'>
            <h1 className='section-header'>Projects</h1>
            <ul className='project-list'>
            {
                projects.map((entry, index) => {
                    return (
                        <li key={entry.title} >
                            <a href={entry.url} title={'Go to ' + entry.title}>
                                <div className='feedback'>
                                    <ListItem thumbnail={entry.thumbnail}
                                        title={entry.title}
                                        subtitle={entry.caption}
                                        date={entry.start + (entry.end? ' - ' + entry.end : '')}
                                        summary={'Tech Used: ' + entry.summary}/>
                                </div>
                            </a>
                            {projects.length - index > 1 && <div className='line-separator' style={{marginBottom: '1em', width: '100%'}}></div>}   
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Projects;
