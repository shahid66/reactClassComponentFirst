import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class TopPage extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="TopFixedPage p-0">
                    <div className="TopPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    
                                    <h4 className="topPageTitle">{this.props.pageTitle}</h4>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopPage;