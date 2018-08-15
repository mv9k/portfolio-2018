import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import './aboutme.css';
import Tilt from 'react-tilt';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Fade } from 'react-slideshow-image';

// const images = [
//     loginImg1,
//     loginImg2,
//     loginImg3,
//     loginImg4,
// ];

const styles = theme => ({
    root: {
        margin: '0 auto',
        // width: '100vw',
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        // paddingBottom: theme.spacing.unit * 2,
        // borderRadius: 0,
        // margin: '10vh 20vw',
        minWidth: '50vw',
        maxWidth: '70vw',
        // padding: '.6em !important',
    },
    customTilt: {
        padding: '6em',
    }

});

function AboutMe(props) {
    const { classes } = props;

    return(
        <div>
            {/*<video autoPlay loop className="video-background" muted>*/}
                {/*<source*/}
                    {/*src={BGvideo}*/}
                    {/*type="video/mp4"></source>*/}
            {/*</video>*/}
        <ScrollAnimation animateIn="fadeIn">
            <Tilt className={classes.customTilt + ' ' + 'Tilt'} options={{
                max: 6,
                reverse: false,
                scale: 1,
                perspective: 1800,
            }} >
                <Paper className={classes.root + ' ' + 'login-paper'} elevation={22}>
                    <div className='Tilt-inner full-height'>
                        <Grid className={'no-pad'}>
                            <Row middle={'xs'}>
                                <Col className={'login-left-col'} xs={12} sm={4}>
                                    <ScrollAnimation animateIn="fadeIn" delay={300}>
                                        {/*<Paper className='portrait' elevation={22}>*/}
                                        {/*<div className='Tilt-inner'>*/}
                                        {/*<img className='soft-shadow tech-mask' src='http://gifimage.net/wp-content/uploads/2017/10/mountain-gif-7.gif' />*/}
                                        {/*</div>*/}
                                        {/*</Paper>*/}
                                        <Typography variant="headline" component="h1">
                                            <span className='gold'> Client Login </span>
                                        </Typography>
                                        <div className='login-form-container'>
                                            <form autoComplete='off' className='login-form'>
                                                <TextField
                                                    id="login-name"
                                                    label="User Name"
                                                    className='login-field'
                                                    fullWidth
                                                    margin="normal"
                                                />
                                                <TextField
                                                    id="login-pw"
                                                    label="Password"
                                                    className='login-field'
                                                    fullWidth
                                                    margin="normal"
                                                />
                                                <Button variant={'outlined'} type="submit" className={'login-button'}>
                                                    LOGIN
                                                </Button>
                                                <Button className={'forgot-password'}>
                                                    Forgot Password?
                                                </Button>
                                            </form>
                                        </div>
                                        {/*<Typography component="p">*/}
                                        {/**/}
                                        {/*</Typography>*/}
                                    </ScrollAnimation>
                                </Col>
                                <Col className={'login-right-col'} xs={12} sm={8}>
                                    <ScrollAnimation animateIn="fadeIn" delay={300}>
                                        {/*<Fade*/}
                                            {/*images={images}*/}
                                            {/*duration={6000}*/}
                                            {/*transitionDuration={1000}*/}
                                        {/*/>*/}
                                    </ScrollAnimation>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Paper>
                {/*<Paper className={classes.root + ' ' + 'login-paper-b'} elevation={22}>*/}
                    {/*<div className='Tilt-inner landing-paper-content'>*/}
                        {/*/!*<ScrollAnimation animateIn="fadeIn" delay={300}>*!/*/}
                        {/*/!*<Paper className='portrait' elevation={22}>*!/*/}
                        {/*/!*<div className='Tilt-inner'>*!/*/}
                        {/*/!*<img className='soft-shadow tech-mask' src='http://gifimage.net/wp-content/uploads/2017/10/mountain-gif-7.gif' />*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*/!*</Paper>*!/*/}
                        {/*/!*</ScrollAnimation>*!/*/}
                        {/*<Typography variant="headline" component="h2">*/}
                        {/*<span className='blue'> / About </span>*/}
                        {/*</Typography>*/}
                        {/*<Typography component="p">*/}
                        {/*<span className='bio-text'>*/}
                        {/*No vix error mediocritatem, sed alii tempor maiorum et. In facilisi singulis scriptorem qui. Dicit propriae instructior an pro. Eleifend intellegebat ea nam, ridens persequeris no mea, id sed lorem salutandi. Id eos noster hendrerit adipiscing, his ex putent nemore accommodare.*/}
                        {/*</span>*/}
                        {/*</Typography>*/}
                    {/*</div>*/}
                {/*</Paper>*/}
                {/*<Paper className={classes.root + ' ' + 'aboutme-paper-border'} elevation={22}>*/}
                    {/*<div className='Tilt-inner'>*/}
                        {/**/}
                    {/*</div>*/}
                {/*</Paper>*/}
                {/*<Paper className='second-layer' elevation={6}>*/}
                    {/*<div className='Tilt-inner'>*/}
                        {/*<Paper elevation={6}>*/}
                            {/*<div className='Tilt-inner landing-paper-content'>*/}
                                {/*<ScrollAnimation animateIn="fadeIn" delay={600}>*/}
                                    {/*<Typography variant="headline" component="h2">*/}
                                        {/*<span className='blue'> / About </span>*/}
                                    {/*</Typography>*/}
                                    {/*<Typography component="p">*/}
                                        {/*<span className='bio-text'>*/}
                                            {/*No vix error mediocritatem, sed alii tempor maiorum et. In facilisi singulis scriptorem qui. Dicit propriae instructior an pro. Eleifend intellegebat ea nam, ridens persequeris no mea, id sed lorem salutandi. Id eos noster hendrerit adipiscing, his ex putent nemore accommodare.*/}
                                        {/*</span>*/}
                                    {/*</Typography>*/}
                                {/*</ScrollAnimation>*/}
                            {/*</div>*/}
                        {/*</Paper>*/}
                    {/*</div>*/}
                {/*</Paper>*/}
            </Tilt>
        </ScrollAnimation>
        </div>
    )

}

export default withStyles(styles)(AboutMe);