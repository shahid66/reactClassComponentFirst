
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import {  Card, Col, Container, Row } from 'react-bootstrap';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

class Summary extends Component {
    
    render() {
        
        return (
            <Fragment>
                <Container fluid={true} className="SummaryBanner summarySection p-0">
                    <div className="SummaryBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col lg={8} md={6} sm={12} className="text-center">
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <ReactVisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </ReactVisibilitySensor>  
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Project</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                            <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <ReactVisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </ReactVisibilitySensor>  
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Client</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="text-center">
                                    <Card className="cardWork mb-4">
    
                                        <Card.Body>
                                            <Card.Title className="cardTitle text-justify">How i work</Card.Title>
                                            <Card.Text>
                                                    <p className="cardSubTitle text-justify"><FontAwesomeIcon className="checkBlue" icon={faCheckCircle} /> Requirement Gathering</p>
                                                    <p className="cardSubTitle text-justify"><FontAwesomeIcon className="checkBlue" icon={faCheckCircle} /> System Analysis</p>
                                                    <p className="cardSubTitle text-justify"><FontAwesomeIcon className="checkBlue" icon={faCheckCircle} /> Coding Testing</p>
                                                    <p className="cardSubTitle text-justify"><FontAwesomeIcon className="checkBlue" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;