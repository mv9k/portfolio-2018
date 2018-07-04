import React, { Component } from 'react';
import './App.css';
//import { Layout, Footer, FooterSection, FooterDropDownSection, FooterLinkList, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link, Route, withRouter} from 'react-router-dom';
import TopNav from './components/topnav';

class App extends Component {
  render() {
      const {location: {pathname}} = this.props;
      const getBg = ()=>{
          switch(this.props.location.pathname) {
              case '/': return 'landing-bg';
              case '/aboutme': return 'aboutme-bg';
              case '/projects': return 'projects-bg';
          }
      };
      console.log(this.props.location.pathname);
    return (
      <div className={'containment' + ' ' + getBg()}>

              <TopNav className={getBg()}>
              </TopNav>

              <Main></Main>

      </div>
    );
  }
}

export default withRouter(App);
