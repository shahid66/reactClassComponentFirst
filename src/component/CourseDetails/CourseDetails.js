import { faCheck,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import Player from 'video-react/lib/components/Player';
import 'video-react/dist/video-react.css';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class CourseDetails extends Component {

    constructor(props){
        super();
        this.state={
            id:props.id,
           
            
            
            long_des:"",
            total_lecture:"",
            total_student:"",
            skill_all:"",
            video_url:"",
            course_link:"",

        }
    }

    componentDidMount(){

        RestClient.GetRequest(AppUrl.courseDetails+this.state.id).then(result => {
            this.setState({ 
                long_des:result[0]['long_des'],
                total_lecture:result[0]['total_lecture'],
                total_student:result[0]['total_student'],
                skill_all:result[0]['skill_all'],
                video_url:result[0]['video_url'],
                course_link:result[0]['course_link'],
            })
            

        }).catch(error => {
            
        });

        window.scroll(0,0);


    }

    render() {
        return (
           <Fragment>

                <Container fluid={true} className="TopFixedCourse p-0">   
                    <div className="TopCourseOverlay">
                        <Container className="topCourseContent">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="topCourseTitle" >Full Dynamic Website With Admin Pnal</h1>
                                    <h5 className="topCourseSubTitle">Total Letcher ={this.state.total_lecture}</h5>
                                    <h5 className="topCourseSubTitle">Total Student ={this.state.total_lecture}</h5>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <p className="topCourseSubTitle" >{this.state.long_des}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>








               <Container className="mt-5">
                   <Row>
                       <Col lg={6} md={6} sm={12}>
                        <h2 className="serviceName">{this.state.id} Skill You Get</h2>
                            {ReactHtmlParser(this.state.skill_all)}
                       </Col>

                       <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }
}

export default CourseDetails;