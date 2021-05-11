import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import webicon from '../../asset/images/web.svg';
import mobile from '../../asset/images/mobile.svg';
import graphics from '../../asset/images/graphics.svg'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class Services extends Component {

    constructor(){
        super();
         this.state={
             myData:[],
             loading:true,
             error:false
         }
        //{
        //     service_name:'',
        //     service_description:'',
        //     service_logo:''
        // }
        
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.services).then(result=>{
            if(result==null){
                this.setState({error:true})
            }
            else{
                this.setState({myData:result,loading:false})
            }
            
        }).catch(error=>{
            this.setState({error:true})
        })

        
        
    }
    
    render() {

        if(this.state.error==false){
            if(this.state.loading===true){
                return <Loading></Loading>
            }
    
            else{
                let list=this.state.myData;
                let myList;
               
                    myList=list.map(data=>{
                        return  <Col lg={4} md={6} sm={12}>
                                    <div className="serviceCard text-center">
                                        <img src={data.service_logo} alt=""/>
                                        <h2 className="serviceName">{data.service_name}</h2>
                                        <p className="serviceDescription">{data.service_description}</p>
                                    </div>
                                </Col>
            })
            return (
                <Fragment>
                    <Container className="mt-5">
                        {this.props.title?<h1 className="serviceMainTitle text-center d-none">My Services</h1>:<h1 className="serviceMainTitle text-center">My Services</h1>}
                        <Row>
    
                            {myList}
                            
                        </Row>
                    </Container>
    
                    
                </Fragment>
            );
    
            }
        }else if(this.state.error==true){
            return <Error></Error>
        }
    }
}

export default Services;