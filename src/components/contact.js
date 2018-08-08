import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tilt from 'react-tilt';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Fade } from 'react-slideshow-image';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

import loginImg1 from '../media/login-abstract.jpg';
import loginImg2 from '../media/login-abstract2.jpg';
import loginImg3 from '../media/login-abstract3.jpg';
import loginImg4 from '../media/login-abstract4.jpg';

import './contact.css';
// import './aboutme.css';


const images = [
    loginImg1,
    loginImg2,
    loginImg3,
    loginImg4,
];

// const updateField = (event) => {
//     this.setState({
//         [event.target.name]: event.target.value
//     });
// };

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        message: '',
    };

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        // axios.post('/api/contact', this.state)
        //     .then( res => {
        //         console.log(res);
        //     });
        window.location = "mailto:mv9kjw@gmail.com" + '?subject=' + this.state.name + '&body=' + this.state.message;
        this.setState({
            name: '',
            message: '',
        })
    };

    render() {
        return (
            <div className={'contact-container'}>
                <ScrollAnimation animateIn="fadeIn">
                    <Tilt className={'custom-tilt' + ' ' + 'Tilt'} options={{
                        max: 6,
                        reverse: false,
                        scale: 1,
                        perspective: 1800,
                    }}>
                        <Paper className={'contact-paper'} elevation={22}>
                            <div className='Tilt-inner full-height'>
                                <Grid className={'no-pad'}>
                                    <Row className={'no-pad'} middle={'xs'}>
                                        <Col className={'contact-left-col'} xs={12} sm={5}>
                                            <ScrollAnimation animateIn="fadeIn" delay={300}>
                                                {/*<Paper className='portrait' elevation={22}>*/}
                                                {/*<div className='Tilt-inner'>*/}
                                                {/*<img className='soft-shadow tech-mask' src='http://gifimage.net/wp-content/uploads/2017/10/mountain-gif-7.gif' />*/}
                                                {/*</div>*/}
                                                {/*</Paper>*/}
                                                <Typography variant="headline" component="h1">
                                                    <span className='gold'> Contact Me </span>
                                                </Typography>
                                                <div className='contact-form-container'>
                                                    <form autoComplete='off' className='contact-form' action={'mailto:mv9kjw@gmail.com'}>
                                                        <TextField
                                                            id="contact-name"
                                                            label="Name"
                                                            className='contact-field'
                                                            fullWidth
                                                            margin="normal"
                                                            onChange={(event) => this.setState({name: event.target.value})}
                                                            value={this.state.name}
                                                        />
                                                        {/*<TextField*/}
                                                            {/*id="contact-email"*/}
                                                            {/*label="Email"*/}
                                                            {/*type='email'*/}
                                                            {/*className='login-field'*/}
                                                            {/*fullWidth*/}
                                                            {/*margin="normal"*/}
                                                            {/*onChange={(event) => this.setState({email: event.target.value})}*/}
                                                            {/*value={this.state.email}*/}
                                                        {/*/>*/}
                                                        <TextField
                                                            id="contact-message"
                                                            label="Message"
                                                            multiline
                                                            rows="8"
                                                            defaultValue=""
                                                            className='message-field'
                                                            margin="normal"
                                                            onChange={(event) => this.setState({message: event.target.value})}
                                                            value={this.state.message}
                                                        />
                                                        <Button
                                                            disabled={!this.state.name || !this.state.message}
                                                            variant={'outlined'}
                                                            type="submit"
                                                            className={'contact-button'}
                                                            // formValues={this.state}
                                                            onClick={(e)=>this.onSubmit(e)}
                                                        >
                                                            SUBMIT
                                                        </Button>
                                                    </form>
                                                </div>
                                                {/*<Typography component="p">*/}
                                                {/**/}
                                                {/*</Typography>*/}
                                            </ScrollAnimation>
                                        </Col>
                                        <Col className={'contact-right-col'} xs={12} sm={7}>
                                            {/*<ScrollAnimation animateIn="fadeIn" delay={300}>*/}
                                                <Fade
                                                    images={images}
                                                    duration={6000}
                                                    transitionDuration={1000}
                                                />
                                            {/*</ScrollAnimation>*/}
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </Paper>
                    </Tilt>
                </ScrollAnimation>
            </div>
            // {/*<div className='contact-form-container'>*/}
            // {/*<form autoComplete='off' className='contact-form'>*/}
            //     {/*<TextField*/}
            //         {/*id="contact-name"*/}
            //         {/*label="name"*/}
            //         {/*className='contact-field'*/}
            //         {/*fullWidth*/}
            //         {/*margin="normal"*/}
            //     {/*/>*/}
            //     {/*<TextField*/}
            //         {/*id="contact-email"*/}
            //         {/*label="email"*/}
            //         {/*placeholder="email"*/}
            //         {/*className='contact-field'*/}
            //         {/*fullWidth*/}
            //         {/*margin="normal"*/}
            //     {/*/>*/}
            //     {/*<TextField*/}
            //         {/*id="contact-subject"*/}
            //         {/*label="subject"*/}
            //         {/*placeholder="subject"*/}
            //         {/*className='contact-field'*/}
            //         {/*fullWidth*/}
            //         {/*margin="normal"*/}
            //     {/*/>*/}
            //     {/*<TextField*/}
            //         {/*id="contact-message"*/}
            //         {/*label="message"*/}
            //         {/*placeholder="message"*/}
            //         {/*className='contact-field'*/}
            //         {/*multiline*/}
            //         {/*rows={11}*/}
            //         {/*fullWidth*/}
            //         {/*margin="normal"*/}
            //     {/*/>*/}
            //     {/*/!*<input placeholder='Name' value={this.state.firstName} />*!/*/}
            // {/*</form>*/}
            // {/*</div>*/}
        )
    }
}

export default Contact;