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

// import BGvideo from '../media/11290640-preview.mp4';
import BGvideo from '../media/kw-bg2.mp4';
import portrait from '../media/kw2.svg';

const styles = theme => ({
    root: {
        margin: '0 auto',
        // width: '100vw',
        // ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        // paddingBottom: theme.spacing.unit * 2,
        // borderRadius: 0,
        // margin: '10vh 20vw',
        minWidth: '50vw',
    },
    customTilt: {
        // padding: '6em',
    }

});

function LandingPage(props) {
    const { classes } = props;

    // let svgString = '<svg width="100%" height="100%" viewBox="0 0 242 274" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">\n' +
    //     '    <g id="kwlogo" transform="matrix(1.15571,0,0,1.15571,-3.8377,3.92861)">\n' +
    //     '        <g id="w" transform="matrix(1.09716,0,0,1.12009,1.13261,16.8979)">\n' +
    //     '            <path d="M187.266,3.966C188.141,4.31 188.579,4.638 188.579,4.95C185.672,9.231 183.985,11.372 183.516,11.372C182.079,11.372 180.844,12.606 179.813,15.075C172.157,26.013 161.375,48.966 147.469,83.935C134.719,117.341 126.578,141.143 120.203,152.956C118.515,155.206 115.61,158.32 113.922,158.32C112.047,158.32 110.485,154.247 109.641,152.466C108.266,148.591 107.579,142.06 107.579,132.872C107.579,128.56 108.266,107.294 109.641,69.075L109.641,68.747C109.641,68.028 109.516,66.122 109.266,63.028C105.516,67.903 96.516,86.466 82.266,118.716C76.079,131.653 66.641,144.71 66.641,144.71C64.86,144.71 64.782,137.419 64.782,133.575C64.782,126.263 68.36,104.325 75.516,67.763C76.235,62.794 77.485,60.31 79.266,60.31L79.594,60.31C81.157,60.81 81.938,62.169 81.938,64.388L82.202,70.46C81.64,70.46 78.282,70.591 76.594,81.591C70.969,107.747 68.157,125.513 68.157,134.888C68.157,135.075 68.25,135.763 68.438,136.95L68.766,136.95C75.204,126.356 85.125,105.872 98.532,75.497C103.5,65.185 109.969,55.256 109.969,55.256C112,55.256 113.016,62.716 113.016,68.091L113.016,69.778C110.337,107.585 110.01,127.988 110.954,132.591L110.954,134.888C111.069,144.336 112.637,151.914 113.703,151.575C114.227,151.247 114.719,151.041 115.498,149.704C117.323,147.092 122.458,131.061 135.896,96.967C151.146,56.811 159.498,25.335 170.373,8.585C174.623,2.96 185.235,3.966 187.266,3.966Z"/>\n' +
    //     '        </g>\n' +
    //     '        <g id="k" transform="matrix(1.16764,2.55011e-17,-2.81903e-16,1.28572,-1.66753,-33.369)">\n' +
    //     '            <path d="M70.672,49.924C70.672,49.924 74.375,45.262 75.71,45.637L82.959,43.02C82.959,44.114 71.063,61.95 62.532,82.669L55.454,99.544C67.485,93.919 80.063,86.513 93.188,77.325C99.625,72.45 106.375,66.7 113.438,60.075L115.5,60.075C115.969,60.138 116.204,60.356 116.204,60.731L117.157,63.658C108.657,72.002 98.813,76.716 89.532,82.997C80.157,89.185 68.344,95.825 54.094,102.919L54.094,104.325C61,109.856 70.782,118.06 83.438,128.935C88.157,132.528 104.907,144.575 133.688,165.075L133.688,165.356L134.391,165.075C136.141,165.075 137.594,166.638 138.75,169.763C138.75,170.2 138.547,170.419 138.141,170.419L137.063,170.419C136.032,170.419 133.016,168.278 128.016,163.997C101.047,144.935 84.172,132.794 77.391,127.575C68.516,119.856 60.282,112.872 52.688,106.622L52.407,106.622C51.063,110.466 45.532,123.966 35.813,147.122C32.344,155.466 30.219,159.638 29.438,159.638L28.454,159.638L26.766,159.31L26.766,155.231C26.766,154.888 27.657,154.435 29.438,153.872C35.282,140.278 42.032,123.966 49.688,104.935C49.688,104.935 51.844,100.356 52.688,97.2C54.063,94.919 59.422,78.236 70.672,49.924Z"/>\n' +
    //     '        </g>\n' +
    //     '    </g>\n' +
    //     '</svg>\n';

    let svgString = '<svg width="100%" height="100%" viewBox="0 0 614 484" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;">\n' +
        '    <g id="kwlogo" serif:id="Layer 1" transform="matrix(1,0,0,1,-3.50137,-4.86543)">\n' +
        '        <g transform="matrix(6.97932,0,0,3.72117,-2599.76,-664.129)">\n' +
        '            <path d="M428.164,280.429L420.091,280.429L410.587,209.881L420.187,209.881L424.315,246.547L424.509,248.851L425.291,248.851L425.581,246.547L429.982,209.881L437.435,209.881L441.836,246.547L442.126,248.851L442.908,248.851L443.101,246.547L447.229,209.881L456.829,209.881L447.325,280.429L439.253,280.429L434.469,247.027L433.898,242.9L433.519,242.9L432.947,247.027L428.164,280.429Z" />\n' +
        '        </g>\n' +
        '        <g transform="matrix(6.97932,0,0,3.72117,-2599.76,-664.129)">\n' +
        '            <path d="M387.634,209.881L387.634,234.549L388.018,234.549L388.497,233.397L397.126,209.881L407.206,209.881L397.702,233.109L408.454,280.429L398.413,280.429L391.213,249.714L390.924,248.275L390.635,248.275L390.056,249.714L387.643,255.473L387.643,280.429L377.275,280.429L377.275,209.881L387.634,209.881Z" />\n' +
        '        </g>\n' +
        '        <g id="k" transform="matrix(2.33716,0,0,2.33716,21.6228,60.6956)">\n' +
        '            <path d="M0,0L247.205,0" />\n' +
        '        </g>\n' +
        '        <g id="w" transform="matrix(2.33716,0,0,2.33716,21.6228,433.035)">\n' +
        '            <path d="M0,0L247.205,0" />\n' +
        '        </g>\n' +
        '    </g>\n' +
        '</svg>';

    return(
        <div className={'landingpage-container'}>
            <div className={'angle-div'}></div>

            <video autoPlay loop className="video-background" muted>
                <source
                    src={BGvideo}
                    type="video/mp4" />
            </video>
            <ScrollAnimation animateIn="fadeIn">
                <Tilt className={'custom-tilt' + ' ' + 'Tilt'} options={{
                    max: 11,
                    reverse: false,
                    scale: 1,
                    perspective: 2800,
                }} >
                    <Paper className={classes.root + ' ' + 'landing-paper-bg'} elevation={22}>
                        <div className={'landing-paper-shine'}></div>
                        {/*<div className={'top-left-corner'}>*/}
                            {/*<Anime*/}
                                {/*opacity={0}*/}
                                {/*duration={9000}*/}
                                {/*loop={true}*/}
                                {/*direction={'alternate'}*/}
                                {/*width={'20em'}*/}
                                {/*elasticity={3}*/}
                                {/*easing={'easeInOutQuad'}*/}
                            {/*>*/}
                                {/*<div className='top-left-x'>*/}
                                {/*</div>*/}
                            {/*</Anime>*/}
                            {/*<Anime*/}
                                {/*opacity={0}*/}
                                {/*duration={9000}*/}
                                {/*loop={true}*/}
                                {/*direction={'alternate'}*/}
                                {/*height={'20em'}*/}
                                {/*elasticity={3}*/}
                                {/*easing={'easeInOutQuad'}*/}
                            {/*>*/}
                                {/*<div className='top-left-y'>*/}
                                {/*</div>*/}
                            {/*</Anime>*/}
                        {/*</div>*/}
                        <Typography variant="headline" component="span" className='tab-text'>
                            {/*<Icon className='email-icon' icon={basic_mail}/>*/}
                            <a href={'mailto:mv9kjw@gmail.com'} className={'contact-link'}>
                            mv9kjw@gmail.com
                            </a>
                            <span className={'vertical-divider'}>&nbsp; | &nbsp;</span>
                            {/*<Icon className='phone-icon' icon={basic_smartphone}/>*/}
                            <a href={'tel:1-801-762-9053'} className={'contact-link'}>
                            801-762-9053
                            </a>
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
                                <Row className={'no-pad' + ' ' + 'fill-row'}>
                                    <Col xs={12} sm={12} md={4} lg={4} className={'portrait-col' + ' ' + 'fill-row-col'}>
                                        {/*<ScrollAnimation animateIn="fadeIn" delay={300}>*/}
                                            {/*<img src='https://media.giphy.com/media/AIGF7ljcNKZI4/giphy.gif' />*/}
                                            {/*<object data={ portrait } type={'image/svg+xml'} className='portrait' />*/}
                                            <div className={'kwlogo-container'} dangerouslySetInnerHTML={{ __html: svgString }} />
                                        {/*</ScrollAnimation>*/}
                                    </Col>
                                    <Col xs={12} sm={12} md={8} lg={8} className={'bio-col'}>
                                        <Typography variant="headline" component="h3">
                                            <span className='gold bio-title'>Kristopher Wheeler</span>
                                            {/*<Anime*/}
                                                {/*width={'100%'}*/}
                                                {/*opacity={'0'}*/}
                                                {/*duration={9000}*/}
                                                {/*loop={false}>*/}
                                                {/*<div className="underline"></div>*/}
                                            {/*</Anime>*/}
                                        </Typography>
                                        <Typography component="p" className='bio-text'>
                                            Full stack web developer with a passion for UX design.
                                            I code both for work and as a hobby. My main interests are:
                                            <br/>
                                            <ul style={{padding:'0 1em'}}>
                                                <li>Building smart user interfaces</li>
                                                <li>Cross-platform development.</li>
                                                <li>Creating responsive web apps people love to use.</li>
                                            </ul>
                                        </Typography>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid fluid className={'social-grid'}>
                                <Row className={'no-pad'} center={'xs'} style={{justifyContent:'space-around'}}>
                                    <Col className={'social-grid-col'} xs={12} sm={4}>
                                        <a href={'/cv/kwheeler_resume_2018.docx'} className={'social-link'} download>
                                            <div className={'social-icon'} style={{fontSize:'1.4em'}}>CV</div>
                                            {/*<Icon className='social-icon' icon={socialCodepenOutline}/>*/}
                                            {/*<span>Codepen</span>*/}
                                        </a>
                                    </Col>
                                    <Col className={'social-grid-col'} xs={4} sm={4}>
                                        <a href={'https://www.linkedin.com/in/kriswheeler/'} target={'_blank'} className={'social-link'}>
                                            <Icon className='social-icon' icon={socialLinkedinOutline}/>
                                            {/*<span>Linkedin </span>*/}
                                        </a>
                                    </Col>
                                    <Col className={'social-grid-col'} xs={4} sm={4}>
                                        <a href={'https://github.com/mv9k'} target={'_blank'} className={'social-link'}>
                                            <Icon className='social-icon' icon={socialOctocat}/>
                                            {/*<span>Github</span>*/}
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