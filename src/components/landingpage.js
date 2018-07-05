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
import Anime from 'react-anime';

import BGvideo from './fogmountain.mp4';

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
        padding: '.3em !important',
    },
    customTilt: {
        padding: '6em',
    }

});

function LandingPage(props) {
    const { classes } = props;

    return(
        <div>
            <video autoPlay loop id="video-background" muted>
                <source
                    src={BGvideo}
                    type="video/mp4"></source>
            </video>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <Tilt className={classes.customTilt + ' ' + 'Tilt'} options={{
                    max: 11,
                    reverse: true,
                    scale: 1,
                    perspective: 2800,
                }} >
                    <Paper className={classes.root + ' ' + 'landing-paper-border'} elevation={22}>
                        <div className='Tilt-inner'>
                            <Paper className={classes.root + ' ' + 'landing-paper-bg'} elevation={22}>
                                <div className='Tilt-inner landing-paper-content'>
                                    <Paper className='top-left-y' elevation={6}>
                                    <div className='Tilt-inner'></div>
                                    </Paper>
                                    <Paper className='top-left-x' elevation={6}>
                                        <div className='Tilt-inner'></div>
                                    </Paper>
                                    <Paper className='landing-tab' elevation={6}>
                                        <div className='Tilt-inner'>
                                            <Typography variant="headline" component="span" className='tab-text'>
                                                <Icon className='email-icon' icon={basic_mail}/>
                                                email@gmail.com &nbsp;
                                                <Icon className='phone-icon' icon={basic_smartphone}/>
                                                555-555-5555
                                            </Typography>
                                        </div>
                                    </Paper>
                                    <ScrollAnimation animateIn="fadeIn" delay={300}>
                                        <Paper className='portrait' elevation={22}>
                                            <div className='Tilt-inner'>
                                                <img src='https://media.giphy.com/media/AIGF7ljcNKZI4/giphy.gif' />
                                            </div>
                                        </Paper>
                                    </ScrollAnimation>
                                    <section>
                                        <article>
                                            <Anime
                                                translateX={'13rem'}
                                                rotate={180}
                                                borderRadius='8px'
                                                duration={2000}
                                                loop={false}>
                                            <div className="blue"></div>
                                            <div className="green"></div>
                                        </Anime>
                                        </article>
                                    </section>
                                    <Typography variant="headline" component="h3">
                                        <span className='gold bio-title'> Kristopher Wheeler  &nbsp; | &nbsp;  Web Developer </span>
                                    </Typography>
                                    <Typography component="p" className='bio-text'>
                                        Multi-disciplinary web developer and interactive experience designer
                                        Let's build something amazing together

                                        Process:
                                        I enjoy building web & mobile applications people love to use.
                                        I build apps and Websites.
                                        No vix error mediocritatem, sed alii tempor maiorum et. In facilisi singulis scriptorem qui. Dicit propriae instructior an pro. Eleifend intellegebat ea nam, ridens persequeris no mea, id sed lorem salutandi. Id eos noster hendrerit adipiscing, his ex putent nemore accommodare.
                                    </Typography>
                                </div>
                            </Paper>
                        </div>
                    </Paper>
                </Tilt>
            </ScrollAnimation>
        </div>
    )

}

export default withStyles(styles)(LandingPage);