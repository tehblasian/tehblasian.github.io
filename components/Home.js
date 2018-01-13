var React = require('react');
var PropTypes = require('prop-types');

var ReactTooltip = require('react-tooltip');
var MediaQuery = require('react-responsive');
var axios = require('axios');

var info = {
    fname: 'Jeremiah-David',
    lname: 'Wreh',
    headline: '2nd Year Software Engineering Co-Op Student',
    education: 'Concordia University',
    location: {
        city: 'Brossard',
        state: 'Quebec',
        country: 'Canada',
    },
    summary: 'Welcome to my page! Here you\'ll find information about myself and my current projects. \nHave a look!',
}

var education = [
    {
        thumbnail: '../images/concordia_logo.png',
        school: 'Concordia University',
        degree: 'B.Eng',
        field: 'Software Engineering',
        start: '2016',
        end: 'Present'
    },
    {
        thumbnail: '../images/dawson_logo.png',
        school: 'Dawson College',
        degree: 'DEC',
        field: 'Pure & Applied Sciences',
        start: '2014',
        end: '2016'
    },
];

var work = [
    {
        thumbnail: '../images/nuance_logo.png',
        company: 'Nuance Communications',
        position: 'Software Engineering Intern',
        start: 'Sept. 2017',
        end: 'Dec. 2017'
    }
];


function Home(props){
    var list = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between',
    }
        return (
            <div className='home-container'>
                <MediaQuery minDeviceWidth={769}>
                    <ul className='main-list'> 
                        <li><Info info={info}/></li>
                        <li>
                            <ul className='horizontal'>
                                <li style={{display: 'flex'}}><Projects projects={projects}/></li>
                                <li>
                                    <ul style={list}>
                                        <li>
                                            <Education education={education}/>
                                        </li>
                                        <li>
                                            <Work work={work}/>
                                        </li>
                                    </ul>
                                </li>
                            </ul> 
                        </li> 
                        <li><Contact/></li> 
                    </ul>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                    <ul className='main-list'> 
                        <li><Info info={info}/></li>
                        <li><Education education={education}/></li>
                        <li><Work work={work}/></li>  
                        <li><Projects projects={projects}/></li>  
                        <li><Contact/></li>           
                    </ul>
                </MediaQuery>
            </div>
        )
}

function Info(props){
    var info = props.info;
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
            <a href='https://github.com/tehblasian/'><img data-tip='Check out my GitHub!' className='badge' src='../images/GitHub-Mark-32px.png' alt='GitHub Logo'/></a>
        </div>
    )
}

function Education(props){
    var education = props.education;
    var eduStyle = {display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1em', width: '95%'};
    return (
        <div className='education-container'>
            <h1 className='section-header'>Education</h1>
            <ul>
            {
                education.map(function(entry, index){
                    return <li key={entry.school}><ListItem
                            thumbnail={entry.thumbnail}
                            title={entry.school}
                            subtitle={entry.degree + ', ' + entry.field}
                            date={entry.start + ' - ' + entry.end}
                            />
                            {education.length - index > 1 && <div className='line-separator' style={eduStyle}></div>}   
                    </li>
                })
            }
            </ul>
        </div>
    )
}

function Work(props){
    var work = props.work;
    return (
        <div className='work-container'>
            <h1 className='section-header'>Work Experience</h1>
            <ul>
            {
                work.map(function(entry, index){
                    return <li key={entry.company}><ListItem
                            thumbnail={entry.thumbnail}
                            title={entry.company}
                            subtitle={entry.position}
                            date={entry.start + ' - ' + entry.end}
                            />
                            {work.length - index > 1 && <div className='line-separator' style={{marginBottom: '1em', width: '100%'}}></div>}   
                    </li>
                })
            }
            </ul>
        </div>
    )
}

var projects = [
    {
        thumbnail: '../images/pokedex.png',
        title: 'PokeDex App',
        caption: 'A PokeDex web app created using React.',
        start: 'July 2017',
        summary: 'Pokéapi v2',
        url: 'https://tehblasian.github.io/poke-app'
    },
    {
        thumbnail: '../images/openweathermap.png',
        title: 'Open Weather App',
        caption: 'A weather web app created using React.',
        start: 'June 2017',
        summary: 'Open Weather Map API',
        url: 'https://tehblasian.github.io/weather-app',
    },
    {
        thumbnail: '../images/roast.png',
        title: 'RoastBot',
        caption: 'A simple SMS bot that replies to texts with a random insult.',
        start: 'April 2017',
        summary: 'Twilio API',
        url: 'https://github.com/tehblasian/RoastBot',
    }
];

function Projects(props){
    var projects = props.projects;
    return (
        <div className='projects-container'>
            <h1 className='section-header'>Projects</h1>
            <ul className='project-list'>
            {
                projects.map(function(entry, index){
                    return <li key={entry.title} >
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
                })
            }
            </ul>
        </div>
    )
}

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            nameCheck: false,
            emailCheck: false,
            subjectCheck: false,
            messageCheck: false,
            validForm: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    handleInputChange(event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;

        var valid = false;

        if(name == 'name') valid = /\w+/g.test(value);
        else if(name == 'email') valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        else if(name == 'subject') valid = /\w+/g.test(value);
        else if(name == 'message') valid = value.length !== 0 && value !== null;

        this.setState(function(){
            return {
                [name]: value,
                [name + 'Check']: valid,
            }
        }, this.validateInput);
    }

    validateInput(){
        var validName = this.state.nameCheck;
        var validEmail = this.state.emailCheck;
        var validSubject = this.state.subjectCheck;
        var validMessage = this.state.messageCheck;

        var valid = validName && validEmail && validSubject && validMessage;

        this.setState(function(){
            return {
                validForm: valid
            }
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://simple-contact-form.herokuapp.com/',
            data: {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message}
        }).then(function(response){
            var message = response.data.response;
            alert(message);
        }).catch(function(error){
            console.log(error);
            alert('Oops! Your email could not be delivered :(');
        });    
    }

    render(){
        return (
            <div className='contact-container'>
                <h1 className='section-header'>Contact Me!</h1>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <MediaQuery minDeviceWidth={730}>
                            <ul className='horizontal' style={{justifyContent: 'left'}}>
                                <li><label className='header-small'>Name<br/><input name='name' placeholder='John Doe' type="text" value={this.state.value} onChange={this.handleInputChange}/></label><br/></li>
                                <li><label className='header-small'>Email<br/><input name='email' placeholder='j_doe@example.com' type="text" value={this.state.value} onChange={this.handleInputChange}/></label><br/></li>    
                            </ul>
                        </MediaQuery>  
                        <MediaQuery maxDeviceWidth={729}>
                        <li><label className='header-small'>Name<br/><input name='name' placeholder='John Doe' type="text" value={this.state.value} onChange={this.handleInputChange}/></label><br/></li>
                        <li><label className='header-small'>Email<br/><input name='email' placeholder='j_doe@example.com' type="text" value={this.state.value} onChange={this.handleInputChange}/></label><br/></li>
                        </MediaQuery>
                        <li><label className='header-small'>Subject<br/><input name='subject' placeholder='Anything!' type="text" value={this.state.value} onChange={this.handleInputChange}/></label><br/></li>
                        <li style={{flexGrow: 2}}><label className='header-small'>Message<br/><textarea style={{width: '100%'}} name='message' value={this.state.value} onChange={this.handleInputChange}/></label><br/></li>      
                        <li><input className='submit' type='submit' value='Send' disabled={!this.state.validForm}/></li>
                    </ul>
                </form>
            </div>
        )
    }
}

function ListItem(props){
    return(
        <div className='list-item-container' style={props.style}>
            <table>
                <tbody>
                    <tr>
                        <td><img className='thumbnail' src={props.thumbnail} alt={props.title + ' Logo'}/></td>
                        <td className='item-info'>
                            <h1 className='item-description-bold'>{props.title}</h1>
                            <h1 className='item-description'>{props.subtitle}</h1>
                            {props.summary && <p className='item-description'>{props.summary}</p>}
                            <h1 className='item-description'>{props.date}</h1>
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

module.exports = Home;