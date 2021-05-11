import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import erroeImg from '../../asset/images/error.svg'

class Error extends Component {
    render() {
        return (
            <Fragment>
            <Container className="text-center">
                <Row >
                    <Col>
                        <img src={erroeImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default Error;