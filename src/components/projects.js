import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
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
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ScrollAnimation from 'react-animate-on-scroll';
// import { Parallax } from 'react-scroll-parallax';

// import PixiComponent from './PixiComponent';

// const mql = window.matchMedia(`(min-width: 800px)`);

// import { Parallax, ParallaxContainer } from 'react-gsap-parallax';

// import ParallaxComponent from 'react-parallax-component';

import Plx from 'react-plx';

const classes = {
    root: {
        width: 'auto',
        height: '100vh !important',
        padding: '1em',
    },
    projectCard: {
        height: '25vh',
    }
};

export default class Projects extends Component {

    constructor(props) {
        super(props);
    }

    projectList = Data.map((project) =>


            <Col key={project.id} md={12} className={'project-col'}>
                <Paper id={project.index} className={classes.projectCard + ' ' + 'project-paper'} elevation={22}>
                    <Grid className={'no-pad' + ' ' + 'projects-container'}>
                        <Row middle={'xs'}>
                            <Col xs={12} md={7} className={'project-img-col'}>
                                <video autoPlay loop muted className={'project-video'}>
                                    <source
                                        src={project.vid}
                                        type="video/mp4">
                                    </source>
                                </video>
                            </Col>
                            <Col xs={12} md={5} className={'project-desc-col'}>
                                <Plx
                                    className={'project-'+project.id}
                                    parallaxData={[{
                                        start: 'self',
                                        duration: 100,
                                        properties:
                                            [
                                                // {
                                                //     startValue: 0,
                                                //     endValue: 1,
                                                //     property: "opacity"
                                                // },
                                                {
                                                    startValue: 0,
                                                    endValue: 1,
                                                    property: 'opacity'
                                                }
                                            ]
                                    }]}
                                >
                                    <h3 className={'project-title'}>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </Plx>
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
            </Col>



    );

    render() {

        return (
            <div style={classes.root}>
                <Grid className={'no-pad' + ' ' + 'projects-container'} style={{height:'1000px'}}>
                    {/*<div style={{height:'1000px',overflow:'scroll'}}>*/}
                    <Row middle={'xs'} style={{background: 'green !important'}}>
                        {this.projectList}
                    </Row>
                </Grid>

                    {/*<PixiComponent/>*/}
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
}

// Projects.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Projects);


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