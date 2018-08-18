import React from 'react';
import MediaQuery from 'react-responsive';
import axios from 'axios';

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
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let valid = false;

        if(name == 'name') valid = /\w+/g.test(value);
        else if(name == 'email') valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        else if(name == 'subject') valid = /\w+/g.test(value);
        else if(name == 'message') valid = value.length !== 0 && value !== null;

        this.setState(({
            [name]: value,
            [name + 'Check']: valid,
        }), this.validateInput);
    }

    validateInput = () => {
        const validName = this.state.nameCheck;
        const validEmail = this.state.emailCheck;
        const validSubject = this.state.subjectCheck;
        const validMessage = this.state.messageCheck;

        const valid = validName && validEmail && validSubject && validMessage;

        this.setState({ validForm: valid });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://simple-contact-form.herokuapp.com/',
            data: {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message}
        })
        .then((response) => {
            const message = response.data.response;
            alert(message);
        })
        .catch((error) => {
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

export default Contact;
