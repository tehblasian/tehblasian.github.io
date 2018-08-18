import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    const { style, thumbnail, title, subtitle, summary, date } = props;
    return(
        <div className='list-item-container' style={style}>
            <table>
                <tbody>
                    <tr>
                        <td><img className='thumbnail' src={thumbnail} alt={title + ' Logo'}/></td>
                        <td className='item-info'>
                            <h1 className='item-description-bold'>{title}</h1>
                            <h1 className='item-description'>{subtitle}</h1>
                            {summary && <p className='item-description'>{summary}</p>}
                            <h1 className='item-description'>{date}</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

ListItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string,
}

export default ListItem;
