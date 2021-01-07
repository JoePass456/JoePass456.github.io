import React, { Component, useState } from "react";
import "./App.css";
import { Row, Col, Container } from 'reactstrap';
import Header from './Header.js';
import Blog from './Blog.js';
import Projects from './Projects.js';

function App() {


  return (
    <Container className="background">
      <Header
        heading="Joe Passafiume"
        subHeading="FULL STACK WEB DEVELOPER" />      
      <Row className="text-center">
      <Col>
          <a href="https://quoter-2c672.web.app/">Quoter Web App</a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/joe-passafiume/">LinkedIn</a>
        </Col>
        <Col>
          <a href="https://github.com/JoePass456">GitHub</a>
        </Col>
        <Col>
          <p>joepass456@gmail.com</p>
        </Col>
      </Row>
      <Projects />
      <Header
        heading="Hello World!"
        subHeading="Joe blogs through Awesome Inc's web developer bootcamp" />
      <Blog />
      <Header subHeading="Thank you for visiting. check back often for updates!" />
    </Container>
  );
}

export default App;
