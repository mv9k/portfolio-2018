import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import './topnav.css'

const styles = {
    root: {
        flexGrow: 1,
        zIndex: 1000,
        position: 'relative',
    },
    bar: {
        textAlign: 'center',
        background: 'none',
        // backgroundColor: '#1f2127 !important',
    },
    flex: {
        flex: 1,
        fontWeight: 300,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navLinks: {
        // position: 'absolute',
        width: '100vw',
        // flex: 1,
        // justifyContent: 'center',
        borderBottom: '1px solid #1d1f25',
    },
    toolBar: {
        paddingRight: '0 !important',
        paddingLeft: '0 !important',
    }
};

function TopNav(props) {
    const { classes } = props;
    return (
        <div className={classes.root + ' ' + 'top-nav'}>
            <AppBar className={classes.bar} position="static">
                <Toolbar className={classes.toolBar}>
                    {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                        {/*<MenuIcon />*/}
                    {/*</IconButton>*/}
                    {/*<Typography variant="title" color="inherit" className='name'>*/}
                        {/*Kristopher Wheeler*/}
                    {/*</Typography>*/}
                    <div className={classes.navLinks + ' ' + 'main-nav'}>
                        <Button color="inherit" className={'nav-button'}>
                            <NavLink activeClassName='active-nav' to="/" exact={true}>
                                <div className='link-line-a'></div>
                                <div className='link-line-z'></div>
                                <span className={'nav-button'}>Home</span>
                                <div className='link-line'></div>
                                <div className='link-line-y'></div>
                                <div className='link-line-yb'></div>
                            </NavLink>
                        </Button>
                        {/*<Button color="inherit">*/}
                            {/*<NavLink activeClassName='active-nav' to="/aboutme">*/}
                                {/*<div className='link-line-a'></div>*/}
                                {/*<div className='link-line-z'></div>*/}
                                {/*<span className={'nav-button'}>Login</span>*/}
                                {/*<div className='link-line'></div>*/}
                                {/*<div className='link-line-y'></div>*/}
                                {/*<div className='link-line-yb'></div>*/}
                            {/*</NavLink>*/}
                        {/*</Button>*/}
                        <Button color="inherit" className={'nav-button'}>
                            <NavLink activeClassName='active-nav' to="/projects">
                                <div className='link-line-a'></div>
                                <div className='link-line-z'></div>
                                <span className={'nav-button'}>Work</span>
                                <div className='link-line'></div>
                                <div className='link-line-y'></div>
                                <div className='link-line-yb'></div>
                            </NavLink>
                        </Button>
                        {/*<Button color="inherit">*/}
                            {/*<NavLink activeClassName='active-nav' to="/resume">*/}
                                {/*<div className='link-line-a'></div>*/}
                                {/*<div className='link-line-z'></div>*/}
                                {/*<span className={'nav-button'}>Services</span>*/}
                                {/*<div className='link-line'></div>*/}
                                {/*<div className='link-line-y'></div>*/}
                                {/*<div className='link-line-yb'></div>*/}
                            {/*</NavLink>*/}
                        {/*</Button>*/}
                        <Button color="inherit" className={'nav-button'}>
                            <NavLink activeClassName='active-nav' to="/contact">
                                <div className='link-line-a'></div>
                                <div className='link-line-z'></div>
                                <span className={'nav-button'}>Contact</span>
                                <div className='link-line'></div>
                                <div className='link-line-y'></div>
                                <div className='link-line-yb'></div>
                            </NavLink>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);