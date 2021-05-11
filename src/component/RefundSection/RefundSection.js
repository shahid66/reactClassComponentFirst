import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class RefundSection extends Component {

    constructor() {
        super();
        this.state = {
            myData:""
        }
        //{
        //     service_name:'',
        //     service_description:'',
        //     service_logo:''
        // }

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.abbout).then(result => {
            this.setState({ myData: result[0]["refund"] })
console.log(result[0]["about"])
        }).catch(error => {
            this.setState({myData:"????"})
        })



    }


    render() {
        return (
            <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} md={12} lg={12}>
                    {ReactHtmlParser(this.state.myData)}

                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default RefundSection;