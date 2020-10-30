import React, { Component, useState } from "react";
import "./App.css";
import blogData from "./blog_data.json";
import Header from './Header.js';
import Blog from './Blog.js';
import { Row, Col, Container } from 'reactstrap';

function App() {
  const [blogPage, setBlogPage] = useState(0);

  const scrollBlog = (page) => {
    let newPage = blogPage + page;
    if (newPage === blogData.length) {
      newPage = 0;
    }
    setBlogPage(newPage);
  }

  return (
    <Container>
      <Header
        heading="Hello World!"
        subHeading="Joe blogs through Awesome Inc's web developer bootcamp" />
      <Blog blogPage={blogPage}
        scrollBlog={scrollBlog}
        blogData={blogData} />
    </Container>
  );
}

export default App;
