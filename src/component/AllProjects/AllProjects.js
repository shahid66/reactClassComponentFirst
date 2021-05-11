import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

class AllProjects extends Component {

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
        RestClient.GetRequest(AppUrl.projectAll).then(result=>{
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
            if(this.state.loading==true){
                return <Loading></Loading>
            }
            else{
                let list=this.state.myData;
            const myList=list.map(data=>{
                return <Col sm={12} md={6} lg={4}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={data.img_one}  />
                            <Card.Body>
                                <Card.Title className="projectTitle">{data.project_name}</Card.Title>
                                <Card.Text>
                                <p className="projectDescription">{data.project_description}</p>
                                </Card.Text>
                                <Button variant="primary"><Link className="link-style" to={"/projectDetails/"+data.id+"/"+data.project_name}>Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
            })
    
    
            return (
                <Fragment>
                <Container className="text-center mt-5">
                {/* <h1 className="serviceMainTitle text-center">RECENT PROJECT</h1> */}
                    <Row>
    
                    {myList}
                       
                    </Row>
                </Container>
            </Fragment>
            );
            }

        }
        else if(this.state.error==true){
            return <Error></Error>
        }


        
        
    }
}

export default AllProjects;