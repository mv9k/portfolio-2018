import React, { Component } from 'react';
import './App.css';
//import { Layout, Footer, FooterSection, FooterDropDownSection, FooterLinkList, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link, Route, withRouter} from 'react-router-dom';
import TopNav from './components/topnav';

class App extends Component {

  componentDidMount() {
      console.log(' ____  __.      .__          __      __ \n' +
          '|    |/ _|______|__| ______ /  \\    /  \\\n' +
          '|      < \\_  __ \\  |/  ___/ \\   \\/\\/   /\n' +
          '|    |  \\ |  | \\/  |\\___ \\   \\        / \n' +
          '|____|__ \\|__|  |__/____  >   \\__/\\  /  \n' +
          '        \\/              \\/         \\/   ');
  }

  render() {
      const {location: {pathname}} = this.props;

      const getBg = ()=>{
          switch(this.props.location.pathname) {
              case '/': return 'landing-bg';
              case '/aboutme': return 'aboutme-bg';
              case '/projects': return 'projects-bg';
              case '/resume': return 'resume-bg';
              case '/contact': return 'contact-bg';
          }
      };

    return (
      <div className={'containment' + ' ' + getBg()}>
          <TopNav></TopNav>
          <div className={'main-container'}>
            <Main></Main>
          </div>
      </div>
    );
  }
}

export default withRouter(App);
