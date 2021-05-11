import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Error from '../Error/Error';


class video extends Component {

    constructor(){
        super();
        this.state={
            show:false,
            video_des:'',
            video_url:'',
            error:false
        }
    }


    componentDidMount() {
        RestClient.GetRequest(AppUrl.videoInfo).then(result => {

            if(result==null){
                this.setState({error:true})
            }else{
                this.setState({
                    video_des: result[0]["video_description"],
                    video_url: result[0]["video_url"],
    
    
    
                })
            }
            
        }).catch(error => {
            this.setState({error:true})
        })



    }

    modalClose=()=>this.setState({show:false});
    modalOpen=()=>this.setState({show:true});

    render() {
        if(this.state.error==false){
            return (
                <Fragment>
                    <Container className="text-center">
                        <Row>
                            <Col lg={12} md={12} sm={12} className="videoCard">
                                <div>
                                    <p className="videoTitle">How I Do</p>
                                    <p className="videoDescription">{this.state.video_des}</p>
                                    <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
    
                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
    
            <Modal.Body>
                <Player>
                    <source src={this.state.video_url} />
                    <BigPlayButton position="center" />
                </Player>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.modalClose}>
                Close
              </Button>
    
            </Modal.Footer>
          </Modal>
    
    
                </Fragment>
            );
        }
        else if(this.state.error==true){
            return <Error></Error>
        }
        
    }
}

export default video;