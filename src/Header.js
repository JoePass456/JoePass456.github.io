import React from 'react';
import { Row, Col } from 'reactstrap';

function Header(props) {


    return (
        <div id="blog" className="container-fluid gill marble edge">
            <div className="row">
                <div className="col text-center p-3">
                    <h1>{props.heading}</h1>
                    <h4>{props.subHeading}</h4>
                </div>
            </div>
            {/* <div className="row text-center">
                <div className="col">
                    <a href="#projects">PROJECTS</a>
                </div>
                <div className="col">
                    <a href="#links">LINKS</a>
                </div>
                <div className="col">
                    <a href="#about">ABOUT JOE</a>
                </div>
            </div> */}
        </div>
    )
};

export default Header;