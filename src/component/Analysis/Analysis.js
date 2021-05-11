import React, { Component, Fragment } from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Error from '../Error/Error';

class Analysis extends Component {
    constructor() {
        super();
        this.state = {
            myData: [],
            desc:"..",
            loading:true,
            error:false
        }
        //{
        //     service_name:'',
        //     service_description:'',
        //     service_logo:''
        // }

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.chartData).then(result => {
            if(result==null){
                this.setState({error:true})
            }
            else{
                this.setState({myData:result,loading:false})
            }

        }).catch(error => {
            this.setState({error:true})
        });

        RestClient.GetRequest(AppUrl.HomeInfo).then(result => {
            this.setState({ desc: result[0]["tech_description"] })

        }).catch(error => {
            this.setState({myData:"????"})
        });


    }
    render() {
        let blue = "rgba(0,115,230,0.8)";

        if(this.state.error==false){
            return (
                <Fragment>
                    <Container>
                    <h1 className="serviceMainTitle text-center">Technology Used</h1>
                        <Row>
                            <Col style={{width:'100%', height:'300px'}} lg={6} md={6} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={100} height={500} data={this.state.myData}>
                                    
                                <Bar dataKey="project" fill={blue} />
                                <XAxis dataKey="technology"></XAxis>
                                <Tooltip></Tooltip>
                                </BarChart>
                            </ResponsiveContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <p className="des">
                                { ReactHtmlParser(this.state.desc) } 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.error==true){
            return <Error></Error>
        }

        
    }
}

export default Analysis;