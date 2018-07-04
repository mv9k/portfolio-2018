import React, { Component } from 'react';
import './App.css';
//import { Layout, Footer, FooterSection, FooterDropDownSection, FooterLinkList, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import TopNav from './components/topnav';

class App extends Component {
  render() {
    return (
      <div>
          {/*<Layout fixedHeader>*/}
              {/*<Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>*/}
                  {/*<Navigation>*/}
                      {/*<Link to="/aboutme">About</Link>*/}
                      {/*<Link to="/projects">Projects</Link>*/}
                      {/*<Link to="/resume">Resume</Link>*/}
                      {/*<Link to="/contact">Contact</Link>*/}
                  {/*</Navigation>*/}
              {/*</Header>*/}
              {/*/!*<Drawer title="Title">*!/*/}
                  {/*/!*<Navigation>*!/*/}
                      {/*/!*<Link to="/">Link</Link>*!/*/}
                      {/*/!*<Link to="/">Link</Link>*!/*/}
                      {/*/!*<Link to="/">Link</Link>*!/*/}
                      {/*/!*<Link to="/">Link</Link>*!/*/}
                  {/*/!*</Navigation>*!/*/}
              {/*/!*</Drawer>*!/*/}
              <TopNav>
              </TopNav>
              {/*<Content>*/}
              <Main></Main>
              {/*</Content>*/}
              {/*<Footer size="mega">*/}
                  {/*<FooterSection type="middle">*/}
                      {/*<FooterDropDownSection title="Features">*/}
                          {/*<FooterLinkList>*/}
                              {/*<a href="#">About</a>*/}
                              {/*<a href="#">Terms</a>*/}
                              {/*<a href="#">Partners</a>*/}
                              {/*<a href="#">Updates</a>*/}
                          {/*</FooterLinkList>*/}
                      {/*</FooterDropDownSection>*/}
                      {/*<FooterDropDownSection title="Details">*/}
                          {/*<FooterLinkList>*/}
                              {/*<a href="#">Specs</a>*/}
                              {/*<a href="#">Tools</a>*/}
                              {/*<a href="#">Resources</a>*/}
                          {/*</FooterLinkList>*/}
                      {/*</FooterDropDownSection>*/}
                      {/*<FooterDropDownSection title="Technology">*/}
                          {/*<FooterLinkList>*/}
                              {/*<a href="#">How it works</a>*/}
                              {/*<a href="#">Patterns</a>*/}
                              {/*<a href="#">Usage</a>*/}
                              {/*<a href="#">Products</a>*/}
                              {/*<a href="#">Contracts</a>*/}
                          {/*</FooterLinkList>*/}
                      {/*</FooterDropDownSection>*/}
                      {/*<FooterDropDownSection title="FAQ">*/}
                          {/*<FooterLinkList>*/}
                              {/*<a href="#">Questions</a>*/}
                              {/*<a href="#">Answers</a>*/}
                              {/*<a href="#">Contact Us</a>*/}
                          {/*</FooterLinkList>*/}
                      {/*</FooterDropDownSection>*/}
                  {/*</FooterSection>*/}
                  {/*<FooterSection type="bottom" logo="Title">*/}
                      {/*<FooterLinkList>*/}
                          {/*<a href="#">Help</a>*/}
                          {/*<a href="#">Privacy & Terms</a>*/}
                      {/*</FooterLinkList>*/}
                  {/*</FooterSection>*/}
              {/*</Footer>*/}
          {/*</Layout>*/}
      </div>
    );
  }
}

export default App;
