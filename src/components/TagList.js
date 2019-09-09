import React from 'react'
import PropTypes from 'prop-types';

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

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
