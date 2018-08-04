import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './projects.css';
import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import tileData from './tileData';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Anime from 'react-anime';
import akoWahiVid from './projects-data/media/akowahi.mp4';

import Data from './projects-data/projectData';
import PixiComponent from './PixiComponent';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ScrollAnimation from 'react-animate-on-scroll';

// import PixiComponent from './PixiComponent';

const styles = theme => ({
    root: {
        width: 'auto',
        height: '100vh !important'
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    subheader: {
        width: '100%',
    },
    projectsItem: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '2em',
    },
    projectsRow: {
        width: '100%',
        margin: 0,
    },
    projectsImg: {
        margin: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    card: {
        position: 'relative',
        minWidth: 275,
        width: '100%',
        height: '100%',
        borderRadius: 0,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardDesc: {
        padding: 0,
    },
});

function Projects(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <video autoPlay loop muted className={'project-video'}>
                <source
                    src={akoWahiVid}
                    type="video/mp4">
                </source>
            </video>
            {/*<PixiComponent/>*/}
            <h3 className={'project-title'}>{Data[1].title}</h3>
            {/*<div className="hex-container">*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

                {/*<Anime opacity={'1'} duration={9000} loop={false} delay={100 + (Math.random() * (300-100))}>*/}
                    {/*<div className="hex">*/}
                        {/*<div className={'hex-img'}>Hex Grid</div>*/}
                    {/*</div>*/}
                {/*</Anime>*/}

            {/*</div>*/}
        </div>
    );
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);


// class Projects extends Component {
//     render() {
//         return(
//             <div>
//                 <h1>Projects Page</h1>
//             </div>
//         )
//     }
// }

// export default Projects