import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class ContactSection extends Component {
  constructor() {
    super();
    this.state = {
        address: "",
        email: "",
        phone: "",

    }
    //{
    //     service_name:'',
    //     service_description:'',
    //     service_logo:''
    // }

}

componentDidMount() {
    RestClient.GetRequest(AppUrl.footer).then(result => {
        this.setState({
            address: result[0]["address"],
            email: result[0]["email"],
            phone: result[0]["phone"],
            facebook: result[0]["facebook"],


        })
        
    }).catch(error => {

    })



}

sendContact(){
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let msg = document.getElementById('msg').value;
  let jsonObjectData={name:name,email:email,msg:msg}

  RestClient.PostRequest(AppUrl.contactSend,JSON.stringify(jsonObjectData)).then(result=>{
    alert("success")
  }).catch(error=>{
    alert("error")
  })
}


render() {
    return (
        <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h2 className="serviceName">Quick Connect</h2>

                        <Form>
                            <Form.Group >
                                <Form.Label className="serviceDescription">Name</Form.Label>
                                <Form.Control id="name" type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className="serviceDescription">Email</Form.Label>
                                <Form.Control id="email" type="email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="serviceDescription">Message</Form.Label>
                                <Form.Control id="msg" as="textarea" rows={3} />
                            </Form.Group>


                            <Button variant="primary" onClick={this.sendContact}>
                                Submit
</Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h2 className="serviceName">Discuss Now</h2>

                        <p className="serviceDescription">{this.state.address}</p>
                        <p className="serviceDescription"><FontAwesomeIcon className="" icon={faEnvelope} />{this.state.email}</p>
                        <p className="serviceDescription"><FontAwesomeIcon className="" icon={faPhone} />{this.state.phone}</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
}

export default ContactSection;