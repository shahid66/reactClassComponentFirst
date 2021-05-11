import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import lodingImg from '../../asset/images/loader.svg'

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row >
                        <Col>
                            <img src={lodingImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;