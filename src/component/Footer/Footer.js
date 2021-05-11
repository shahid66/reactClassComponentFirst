import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Error from '../Error/Error';



class Footer extends Component {

    constructor() {
        super();
        this.state = {
            address:"",
            email:"",
            phone:"",
            facebook:"",
            youtube:"",
            footer_credit:"",
            error:false
        }
        //{
        //     service_name:'',
        //     service_description:'',
        //     service_logo:''
        // }

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.footer).then(result => {

            if(result==null){
                this.setState({error:true})
            }
            else{
                this.setState({ 
                    address: result[0]["address"],
                    email: result[0]["email"],
                    phone: result[0]["phone"],
                    facebook: result[0]["facebook"],
                    youtube: result[0]["youtube"], 
                    footer_credit: result[0]["footer_credit"],
                    
                })
            }

        }).catch(error => {
            this.setState({error:true})
        })



    }


    render() {

        if(this.state.error==false){
            return (
                <Fragment>
                    <Container fluid={true} className="footerSection">
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h2 className="serviceName">Follow ME</h2>
    
                                <a className="socialLink" target="_blank" href={"//"+this.state.facebook}> <FontAwesomeIcon className="" icon={faFacebook} />facebook</a><br/>
                                <a className="socialLink" target="_blank" href={"//"+this.state.youtube}> <FontAwesomeIcon className="" icon={faYoutube} />YouTube</a>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h2 className="serviceName">Address</h2>
    
                                <p className="serviceDescription">{this.state.address}</p>
                                <p className="serviceDescription"><FontAwesomeIcon className="" icon={faEnvelope} />{this.state.email}</p>
                                <p className="serviceDescription"><FontAwesomeIcon className="" icon={faPhone} />{this.state.phone}</p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h2 className="serviceName">Information</h2>
    
                                <Link className="footerlLink" to="/about">About Me</Link><br/>
                                {/* <Link className="footerlLink" to="">My Resumy</Link><br/> */}
                                <Link className="footerlLink" to="/contact">Contact Me</Link>
    
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h2 className="serviceName">Legal</h2>
    
                                <Link className="footerlLink" to="/refund">Refand Police</Link><br/>
                                <Link className="footerlLink" to="/trumpsPolicy">Trams & Condition</Link><br/>
                                <Link className="footerlLink" href="">Contact Me</Link>
                            </Col>
    
                        </Row>
                    </Container>
    
                    <Container fluid={true} className="text-center copyRightSection">
                        <a className="copyRightLink" href="">{this.state.footer_credit}</a>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.error==true){
            return <Error></Error>
        }
       
    }
}

export default Footer;