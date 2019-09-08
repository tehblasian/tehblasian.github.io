import React from 'react'
import Tag from './Tag'

const TagList = ({ tags }) => (
    <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
        { 
            tags.map((tag) => (
                <li key={tag}>
                    <Tag text={tag} />
                </li>)
            ) 
        }
    </ul>
)

export default TagList;
