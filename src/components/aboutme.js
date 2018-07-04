import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import './aboutme.css';
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
        padding: '.6em !important',
    },
    customTilt: {
        padding: '6em',
    }

});

function AboutMe(props) {
    const { classes } = props;
    return(
        <ScrollAnimation animateIn="fadeIn">
            <Tilt className={classes.customTilt + ' ' + 'Tilt'} options={{
                max: 11,
                reverse: true,
                scale: 1,
                perspective: 1800,
            }} >
                <Paper className={classes.root + ' ' + 'aboutme-paper-border'} elevation={22}>
                    <div className='Tilt-inner'>
                        <Paper className={classes.root + ' ' + 'aboutme-paper-bg'} elevation={22}>
                            <div className='Tilt-inner landing-paper-content'>
                                <ScrollAnimation animateIn="fadeIn" delay={300}>
                                    <Paper className='portrait' elevation={22}>
                                        <div className='Tilt-inner'>
                                            <img className='soft-shadow tech-mask' src='http://gifimage.net/wp-content/uploads/2017/10/mountain-gif-7.gif' />
                                        </div>
                                    </Paper>
                                </ScrollAnimation>
                                {/*<Typography variant="headline" component="h2">*/}
                                    {/*<span className='blue'> / About </span>*/}
                                {/*</Typography>*/}
                                {/*<Typography component="p">*/}
                                    {/*<span className='bio-text'>*/}
                                        {/*No vix error mediocritatem, sed alii tempor maiorum et. In facilisi singulis scriptorem qui. Dicit propriae instructior an pro. Eleifend intellegebat ea nam, ridens persequeris no mea, id sed lorem salutandi. Id eos noster hendrerit adipiscing, his ex putent nemore accommodare.*/}
                                    {/*</span>*/}
                                {/*</Typography>*/}
                            </div>
                        </Paper>
                    </div>
                </Paper>
                <Paper className='second-layer' elevation={6}>
                    <div className='Tilt-inner'>
                        <Paper elevation={6}>
                            <div className='Tilt-inner landing-paper-content'>
                                <ScrollAnimation animateIn="fadeIn" delay={600}>
                                    <Typography variant="headline" component="h2">
                                        <span className='blue'> / About </span>
                                    </Typography>
                                    <Typography component="p">
                                        <span className='bio-text'>
                                            No vix error mediocritatem, sed alii tempor maiorum et. In facilisi singulis scriptorem qui. Dicit propriae instructior an pro. Eleifend intellegebat ea nam, ridens persequeris no mea, id sed lorem salutandi. Id eos noster hendrerit adipiscing, his ex putent nemore accommodare.
                                        </span>
                                    </Typography>
                                </ScrollAnimation>
                            </div>
                        </Paper>
                    </div>
                </Paper>
            </Tilt>
        </ScrollAnimation>
    )

}

export default withStyles(styles)(AboutMe);