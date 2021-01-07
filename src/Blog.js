import React, { Component, useState } from "react";

import { Row, Col } from 'reactstrap';
import blogData from "./blog_data.json";

function Blog() {
    const [blogPage, setBlogPage] = useState(0);
    
    let blogPost = blogData[blogPage].Paragraphs.map((para, i) => {
        return<p key={i}>{para}</p>
    });

  const scrollBlog = (page) => {
    let newPage = blogPage + page;
    if (newPage === blogData.length) {
      newPage = 0;
    }
    if (newPage === -1) {
      newPage = blogData.length - 1;
    }
    setBlogPage(newPage);
  }





    return (
        // Buttons to change Pages
        <div className="container-fluid">
            <div className="row bg-secondary p-1">
                <div className="col-6 text-center">
                    <button className="btn btn-primary" onClick={() => scrollBlog(-1)}>Previous Post</button>
                </div>
                <div className="col-6 text-center">
                    <button className="btn btn-primary" onClick={() => scrollBlog(+1)}>Next Post</button>
                </div>
            </div>
            {/* <!-- Blog DisplayeNamer  --> */}
            <div className="row edge">
                <div className="col text-left p-4 bg-light">
                    <h3>{blogData[blogPage].Heading}</h3>
                    {blogPost}
                    <h4>Summary:</h4>
                    <h6>{blogData[blogPage].Summary}</h6>
                </div>
            </div>
        </div>
    )
};

export default Blog;