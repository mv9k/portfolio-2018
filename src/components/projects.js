import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './projects.css';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './tileData';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
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
            {/*<div className="row custom-bar">*/}
                {/*<div className="col-xs-12*/}
                {/*col-sm-8*/}
                {/*col-md-6*/}
                {/*col-lg-4">*/}
                    {/*<div className="box">Responsive</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            <Grid fluid>
                <ScrollAnimation animateIn="fadeIn">
                    <Row className={classes.projectsRow}>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <ScrollAnimation animateIn="fadeIn" delay={100}>
                                <img className={classes.projectsImg} src='http://via.placeholder.com/650x450' />
                            </ScrollAnimation>
                        </Col>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image="http://via.placeholder.com/350x450"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className='card-desc'>
                                    {/*<Typography className={classes.title} color="textSecondary">*/}
                                    {/*Word of the Day*/}
                                    {/*</Typography>*/}
                                    <Row className={classes.projectsRow}>
                                        <Col className={classes.cardDesc} xs={12} sm={9}>
                                            <Typography style={{color: 'white'}} variant="headline" component="h2">
                                                Project title
                                            </Typography>
                                        </Col>
                                        <Col className={classes.cardDesc} xs={12} sm={3}>

                                            <Button size="small">Learn More</Button>

                                        </Col>
                                    </Row>
                                    <Typography className={classes.pos} color="textSecondary">
                                        adjective
                                    </Typography>
                                    {/*<Typography component="p">*/}
                                    {/*well meaning and kindly.<br />*/}
                                    {/*{'"a benevolent smile"'}*/}
                                    {/*</Typography>*/}

                                </CardContent>
                            </Card>
                        </Col>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <img className={classes.projectsImg} src='http://via.placeholder.com/650x450' />
                        </Col>
                    </Row>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <Row className={classes.projectsRow}>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <img className={classes.projectsImg} src='http://via.placeholder.com/650x450' />
                        </Col>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image="http://via.placeholder.com/350x450"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className='card-desc'>
                                    {/*<Typography className={classes.title} color="textSecondary">*/}
                                    {/*Word of the Day*/}
                                    {/*</Typography>*/}
                                    <Row className={classes.projectsRow}>
                                        <Col className={classes.cardDesc} xs={12} sm={9}>
                                            <Typography style={{color: 'white'}} variant="headline" component="h2">
                                                Project title
                                            </Typography>
                                        </Col>
                                        <Col className={classes.cardDesc} xs={12} sm={3}>

                                            <Button size="small">Learn More</Button>

                                        </Col>
                                    </Row>
                                    <Typography className={classes.pos} color="textSecondary">
                                        adjective
                                    </Typography>
                                    {/*<Typography component="p">*/}
                                    {/*well meaning and kindly.<br />*/}
                                    {/*{'"a benevolent smile"'}*/}
                                    {/*</Typography>*/}

                                </CardContent>
                            </Card>
                        </Col>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <img className={classes.projectsImg} src='http://via.placeholder.com/650x450' />
                        </Col>
                    </Row>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <Row className={classes.projectsRow}>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <img className={classes.projectsImg} src='http://via.placeholder.com/650x450' />
                        </Col>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image="http://via.placeholder.com/350x450"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className='card-desc'>
                                    {/*<Typography className={classes.title} color="textSecondary">*/}
                                    {/*Word of the Day*/}
                                    {/*</Typography>*/}
                                    <Row className={classes.projectsRow}>
                                        <Col className={classes.cardDesc} xs={12} sm={9}>
                                            <Typography style={{color: 'white'}} variant="headline" component="h2">
                                                Project title
                                            </Typography>
                                        </Col>
                                        <Col className={classes.cardDesc} xs={12} sm={3}>

                                            <Button size="small">Learn More</Button>

                                        </Col>
                                    </Row>
                                    <Typography className={classes.pos} color="textSecondary">
                                        adjective
                                    </Typography>
                                    {/*<Typography component="p">*/}
                                    {/*well meaning and kindly.<br />*/}
                                    {/*{'"a benevolent smile"'}*/}
                                    {/*</Typography>*/}

                                </CardContent>
                            </Card>
                        </Col>
                        <Col className={classes.projectsItem} xs={12} sm={6} md={6} lg={4}>
                            <img className={classes.projectsImg} src='http://via.placeholder.com/650x450' />
                        </Col>
                    </Row>
                </ScrollAnimation>
                <Row>
                    <Col xs={12}>
                        <Row start="xs">
                            <Col xs={6} />
                        </Row>
                    </Col>
                </Row>
            </Grid>
            {/*<GridList cellHeight={360} className={classes.gridList} cols={4}>*/}
                {/*{tileData.map(tile => (*/}
                    {/*<GridListTile key={tile.img} cols={tile.cols || 1}>*/}
                        {/*<img src={tile.img} alt={tile.title} />*/}
                        {/*<GridListTileBar*/}
                            {/*title={tile.title}*/}
                            {/*subtitle={<span>{tile.author}</span>}*/}
                        {/*/>*/}
                    {/*</GridListTile>*/}
                {/*))}*/}
            {/*</GridList>*/}
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