import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './contact.css';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    render() {
        const { classes } = this.props;

        return(
            <div className='contact-form-container'>
            <form autoComplete='off' className='contact-form'>
                <TextField
                    id="contact-name"
                    label="name"
                    className='contact-field'
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="contact-email"
                    label="email"
                    placeholder="email"
                    className='contact-field'
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="contact-subject"
                    label="subject"
                    placeholder="subject"
                    className='contact-field'
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="contact-message"
                    label="message"
                    placeholder="message"
                    className='contact-field'
                    multiline
                    rows={11}
                    fullWidth
                    margin="normal"
                />
                {/*<input placeholder='Name' value={this.state.firstName} />*/}
            </form>
            </div>
        )
    }
}

export default Contact