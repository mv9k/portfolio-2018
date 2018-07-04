import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import './landingpage.css';
import Tilt from 'react-tilt';

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
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Tilt className={classes.customTilt + ' ' + 'Tilt'} options={{
                max: 11,
                reverse: true,
                scale: 1,
                perspective: 1800,
            }} >
                <Paper className={classes.root + ' ' + 'landing-paper-border'} elevation={22}>
                    <div className='Tilt-inner'>
                        <Paper className={classes.root + ' ' + 'landing-paper-bg'} elevation={22}>
                            <div className='Tilt-inner landing-paper-content'>
                                <Paper className='landing-tab' elevation={6}>
                                    <div className='Tilt-inner'>
                                        <Typography variant="headline" component="p" className='tab-text'>
                                            <span className="glitch">email@gmail.com  |  555-555-5555</span>
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
                                <Typography variant="headline" component="h3">
                                    <span className='gold'> / About </span>
                                </Typography>
                                <Typography component="p">
                                    <p className='bio-text'>
                                        No vix error mediocritatem, sed alii tempor maiorum et. In facilisi singulis scriptorem qui. Dicit propriae instructior an pro. Eleifend intellegebat ea nam, ridens persequeris no mea, id sed lorem salutandi. Id eos noster hendrerit adipiscing, his ex putent nemore accommodare.
                                    </p>
                                </Typography>
                            </div>
                        </Paper>
                    </div>
                </Paper>
            </Tilt>
        </ScrollAnimation>
    )

}

export default withStyles(styles)(LandingPage);