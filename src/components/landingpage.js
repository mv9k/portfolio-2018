import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import './landingpage.css';
import Tilt from 'react-tilt';
import Icon from 'react-icons-kit';
import {basic_mail} from 'react-icons-kit/linea/basic_mail';
import {basic_smartphone} from 'react-icons-kit/linea/basic_smartphone';
import {socialOctocat, socialFacebook, socialLinkedinOutline, socialCodepenOutline, socialYoutube} from 'react-icons-kit/ionicons';
import Anime from 'react-anime';
import { Grid, Row, Col } from 'react-flexbox-grid';

import BGvideo from '../media/11290640-preview.mp4';
import portrait from '../media/k.jpg';

const styles = theme => ({
    root: {
        margin: '0 auto',
        // width: '100vw',
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        // paddingBottom: theme.spacing.unit * 2,
        borderRadius: 0,
        // margin: '10vh 20vw',
        minWidth: '50vw',
        maxWidth: '70vw',
    },
    customTilt: {
        padding: '6em',
    }

});

function LandingPage(props) {
    const { classes } = props;

    return(
        <div>
            <video autoPlay loop className="video-background" muted>
                <source
                    src={BGvideo}
                    type="video/mp4"></source>
            </video>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <div className={'angle-div'}></div>
                <Tilt className={classes.customTilt + ' ' + 'Tilt'} options={{
                    max: 11,
                    reverse: false,
                    scale: 1,
                    perspective: 2800,
                }} >
                    <Paper className={classes.root + ' ' + 'landing-paper-bg'} elevation={22}>
                        <div className={'top-left-corner'}>
                            {/*<Anime*/}
                                {/*opacity={0}*/}
                                {/*duration={3000}*/}
                                {/*loop={true}*/}
                                {/*direction={'alternate'}*/}
                                {/*width={'40px'}*/}
                                {/*elasticity={0}*/}
                                {/*easing={'easeInOutQuad'}*/}
                            {/*>*/}
                                <div className='top-left-x'>
                                </div>
                            {/*</Anime>*/}
                            {/*<Anime*/}
                                {/*opacity={0}*/}
                                {/*duration={3000}*/}
                                {/*loop={true}*/}
                                {/*direction={'alternate'}*/}
                                {/*height={'40px'}*/}
                                {/*elasticity={0}*/}
                                {/*easing={'easeInOutQuad'}*/}
                            {/*>*/}
                                <div className='top-left-y'>
                                </div>
                            {/*</Anime>*/}
                        </div>
                        <Typography variant="headline" component="span" className='tab-text'>
                            {/*<Icon className='email-icon' icon={basic_mail}/>*/}
                            email@gmail.com &nbsp; | &nbsp;
                            {/*<Icon className='phone-icon' icon={basic_smartphone}/>*/}
                            555-555-5555
                        </Typography>
                        <div className='Tilt-inner landing-paper-content'>

                            {/*<Paper className='landing-tab' elevation={6}>*/}
                                {/*<div className='Tilt-inner'>*/}
                                    {/**/}
                                {/*</div>*/}
                            {/*</Paper>*/}


                            {/*<Paper className='top-left-y' elevation={6}>*/}
                            {/*<div className='Tilt-inner'></div>*/}
                            {/*</Paper>*/}
                            {/*<Paper className='top-left-x' elevation={6}>*/}
                            {/*<div className='Tilt-inner'></div>*/}
                            {/*</Paper>*/}
                            <Grid fluid className={'no-pad'}>
                                <Row className={'no-pad'}>
                                    <Col xs={12} sm={12} md={6} lg={6} className={'portrait-col'}>
                                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                                            {/*<img src='https://media.giphy.com/media/AIGF7ljcNKZI4/giphy.gif' />*/}
                                            <img src={ portrait } className='portrait' />
                                        </ScrollAnimation>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} className={'no-pad'}>
                                        <Typography variant="headline" component="h3">
                                            <span className='gold bio-title'> Kristopher Wheeler </span>
                                            <Anime
                                                width={'100%'}
                                                opacity={'0'}
                                                duration={9000}
                                                loop={false}>
                                                <div className="underline"></div>
                                            </Anime>
                                        </Typography>
                                        <Typography component="p" className='bio-text'>
                                            Multi-disciplinary web developer

                                            Process:
                                            Feel free to contact me for freelance project.
                                            I like to resolve design problems, create smart user interface and imagine useful interaction.
                                            I enjoy building web & mobile applications people love to use.
                                            I build apps and Websites.
                                        </Typography>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid fluid className={'social-grid'}>
                                <Row className={'no-pad'} center={'xs'}>
                                    <Col className={'social-grid-col'} xs={12} sm={3}>
                                        <a href={'#'} className={'social-link'}>
                                            <Icon className='social-icon' icon={socialLinkedinOutline}/>
                                            {/*<span>Linkedin </span>*/}
                                        </a>
                                    </Col>
                                    <Col className={'social-grid-col'} xs={12} sm={3}>
                                        <a href={'#'} className={'social-link'}>
                                            <Icon className='social-icon' icon={socialOctocat}/>
                                            {/*<span>Github</span>*/}
                                        </a>
                                    </Col>
                                    <Col className={'social-grid-col'} xs={12} sm={3}>
                                        <a href={'#'} className={'social-link'}>
                                            <Icon className='social-icon' icon={socialCodepenOutline}/>
                                            {/*<span>Codepen</span>*/}
                                        </a>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </Paper>
                    {/*<Paper className={classes.root + ' ' + 'landing-paper-border'} elevation={22}>*/}
                        {/*<div className='Tilt-inner'>*/}
                            {/**/}
                        {/*</div>*/}
                    {/*</Paper>*/}
                </Tilt>
            </ScrollAnimation>
        </div>
    )

}

export default withStyles(styles)(LandingPage);