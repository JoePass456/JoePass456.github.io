import React from 'react';
import { Row, Col } from 'reactstrap';

function Blog(props) {
    console.log(props.blogData[0].Heading, props.blogPage);
    let blogPost = [];


    return (
        <div className="container-fluid">
            <div className="row bg-secondary p-1">
                <div className="col-6 text-center">
                    <button className="btn" onClick={() => props.scrollBlog(-1)}>Previous Post</button>
                </div>
                <div className="col-6 text-center">
                    <button className="btn" onClick={() => props.scrollBlog(+1)}>Next Post</button>
                </div>
            </div>
            {/* <!-- Blog DisplayeNamer  --> */}
            <div className="row edge">
                <div className="col text-left p-4 bg-light">
                    {/* <h3>{props.blogData[props.blogPage].Heading}</h3> */}
                    {blogPost}
                </div>
            </div>
        </div>
    )
};

export default Blog;