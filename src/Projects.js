import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Background from './img/Joe_Passafiume_Resume.jpg';


function Projects() {
    return (
        <Container>
            <Row>
                <Col>
                    <img className="img-fluid border" src={ Background }/>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects
