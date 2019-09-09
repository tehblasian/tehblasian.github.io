import React from 'react'
import PropTypes from 'prop-types';

const Icon = ({ src, size = '32px', alt }) => {
    return (
        <img alt={alt} src={src} width={size} height={size} />
    )
};

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.string,
};

export default Icon;
