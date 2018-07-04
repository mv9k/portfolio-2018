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
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        borderRadius: 0,
        margin: '6em',
    },
});

function AboutMe(props) {

    const { classes } = props;
        return(
            <ScrollAnimation animateIn="fadeIn">
                <Tilt className='Tilt' options={{
                    max: 6,
                    reverse: true,
                    scale: 1,
                    perspective: 2000,
                }} >
                        <Paper className={classes.root + ' ' + 'main-paper'} elevation={22}>
                            <div className='Tilt-inner'>
                                <Typography variant="headline" component="h3">
                                    About:
                                </Typography>
                                <Typography component="p">
                                    Paper can be used to build surface or other elements for your application.
                                </Typography>
                            </div>
                        </Paper>
                </Tilt>
            </ScrollAnimation>
        )

}

export default withStyles(styles)(AboutMe);