import React from 'react'

const Icon = ({ src, size = '32px', alt }) => {
    return (
        <img alt={alt} src={src} width={size} height={size} />
    )
};

export default Icon;
