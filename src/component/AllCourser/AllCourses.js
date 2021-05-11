import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

class AllCourses extends Component {


    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error:false
        }
        //{
        //     service_name:'',
        //     service_description:'',
        //     service_logo:''
        // }

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseAll).then(result => {
            if(result==null){
                this.setState({error:true})
            }
            else{
                this.setState({myData:result,loading:false})
            }

        }).catch(error => {
            this.setState({error:true})
        })



    }


    render() {

        if(this.state.error==false){
            if (this.state.loading == true) {
                return <Loading></Loading>
            }
    
            else {
                let list = this.state.myData;
                const myList = list.map(data => {
                    return <Col lg={6} md={12} sm={12} className="p-4">
                        <Row>
                            <Col className="mb-2" lg={6} md={6} sm={12}>
                                <img className="courseImg" src={data.small_img} alt="" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="courseTitle">{data.short_title}</h5>
                                <p className="courseDescription" >{data.short_des}</p>
                                <Link to={"/courseDetails/"+data.id}>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                })
    
    
                return (
                    <Fragment>
                        <Container className="mt-5">
                            {/* <h1 className="serviceMainTitle text-center">OUR COURSE</h1> */}
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

export default AllCourses;