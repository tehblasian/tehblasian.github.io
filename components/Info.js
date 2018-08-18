import React from 'react';
import MediaQuery from 'react-responsive';
import ReactTooltip from 'react-tooltip';

const Info = (props) => {
    const { info } = props;
    return(
        <div className='info-container'>
            <MediaQuery maxDeviceWidth={768}><img className='avatar' src='../images/profile.jpg' alt='Jay Wreh'/></MediaQuery>
            <ul className='horizontal'>
            <MediaQuery minDeviceWidth={769}><li><img className='avatar' src='../images/profile.jpg' alt='Jay Wreh'/></li></MediaQuery>
                <li className='information'>
                    <h1 className='header'>{info.fname + ' ' + info.lname}</h1>
                    <h1 className='headline'>{info.headline}</h1>
                    <h1 className='header-small'>{info.education}</h1>
                    <h1 className='header-small'>{info.location.city + ', ' + info.location.state + ', ' + info.location.country}</h1>
                </li>
            </ul>
                {info.summary && <div className='line-separator'></div>} 
                <MediaQuery maxDeviceWidth={768}><p className='header-small'>{info.summary}</p></MediaQuery>
                <MediaQuery minDeviceWidth={769}><pre className='header-small'>{info.summary}</pre></MediaQuery>
            <ReactTooltip className='tooltip' place='bottom' type='dark' effect='solid' delayHide={50}/>
            <a href='https://github.com/tehblasian/' target="_blank">
                <img 
                    data-tip='Check out my GitHub!' 
                    className='badge' 
                    src='../images/GitHub-Mark-32px.png' 
                    alt='GitHub Logo'/>
            </a>
            <a href="https://www.linkedin.com/in/jeremiah-david-wreh/" target="_blank">
                <img 
                    style={{ position: 'relative', left: '10px' }} 
                    data-tip="View out my LinkedIn profile!" 
                    className="badge" 
                    src="../images/linkedin-logo.png" 
                    alt="LinkedIn logo"/> 
            </a>
        </div>
    )
}

export default Info;
