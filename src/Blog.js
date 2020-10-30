import React from 'react';
import { Row, Col } from 'reactstrap';

function Blog(props) {
    // console.log(props.blogData[props.blogPage], );
    let blogPost = [];
    blogPost = props.blogData[props.blogPage].Paragraphs.map((para, i) => {
        return<p key={i}>{para}</p>
    });



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
                    <h3>{props.blogData[props.blogPage].Heading}</h3>
                    {blogPost}
                    <h4>Summary:</h4>
                    <h6>{props.blogData[props.blogPage].Summary}</h6>
                </div>
            </div>
        </div>
    )
};

export default Blog;