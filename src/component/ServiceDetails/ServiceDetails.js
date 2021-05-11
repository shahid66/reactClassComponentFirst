import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class ServiceDetails extends Component {

    constructor(props){
        super();
        this.state={
            projectId:props.id,
            project_name:"",
            project_description:"...",
            project_feature:"",
            img_two:"",

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.projectDetails+this.state.projectId).then(result => {
            this.setState({ 
                project_description: result[0]["project_description"],
                project_name: result[0]["project_name"],
                project_feature: result[0]["project_feature"], 
                img_two: result[0]["img_two"]
            })
            

        }).catch(error => {
            
        });



    }

    render() {
        
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src={this.state.img_two} alt=""/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">{this.state.project_name}</h1>
                            <p className="serviceDescription">{this.state.project_description}</p>

                            {ReactHtmlParser(this.state.project_feature)}

                            <Button variant="primary">Buy</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ServiceDetails;