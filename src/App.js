import React, { Component } from "react";
import "./App.css";
import blogData from "./blog_data.json";
import Header from './Header.js';
import Blog from './Blog.js';
import { Row, Col, Container } from 'reactstrap';

function App() {
  const [blogPage, setBlogPage] = useState(0);

const scrollBlog = (page) => {                                                                                                                                                                                                                                                                                                                                                                                     
  let newPage = blogPage + page;
  setBlogPage(newPage);
  console.log('in scrollBlog');
}

  return (
    <Container>      
        <Header />
        <Blog blogPage={blogPage} scrollBlog={scrollBlog} blogData={blogData}/>
    </Container>
  );
}                                                                                                                          

export default App;
