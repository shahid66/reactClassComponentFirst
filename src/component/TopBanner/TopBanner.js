import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';



class TopBanner extends Component {

    constructor(){
        super();
        this.state={
            title:'',
            subTilte:'',
            loadingClass:"",
            error:false
        }
        
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeInfo).then(result=>{
            if(result==null){
                this.setState({error:true})
            }
            else{
                this.setState({title:result[0]['home_title'],subTilte:result[0]['home_subtitle'],loadingClass:"d-none"})
            }
            
            
        }).catch(error=>{
            this.setState({error:true})
        })
        
    }


    render() {
        if(this.state.error==false){
            return (
                <Fragment>
                    <Container fluid={true} className="TopFixedBanner p-0">
                        <div className="TopBannerOverlay">
                            <Container className="topContent">
                                <Row>
                                    <Col className="text-center">
                                        <span className={this.state.loadingClass}><Loading/></span>
                                        <h2 className="topTitle">{this.state.title}</h2>
                                        <h4 className="topSubTitle">{this.state.subTilte}</h4>
                                        <Button variant="primary">More Info</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.error==true){
            return <Error></Error>
        }
        
    }
}

export default TopBanner;