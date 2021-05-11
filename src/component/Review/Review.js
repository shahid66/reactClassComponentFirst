import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class Review extends Component {

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
    RestClient.GetRequest(AppUrl.clientData).then(result => {
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
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 3000,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    if(this.state.error==false){
      if (this.state.loading == true) {
        return <Loading></Loading>
      }
      else {
        let list = this.state.myData;
        
        
        const myList = list.map(data => {
            return <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img className="circleImg" src={data.client_logo} alt="" />
                  <h1 className="reviewTitle">{data.client_name}</h1>
                  <p className="reviewDescription">{data.client_description}</p>
                </Col>
              </Row>
            </div>
          })
    
    
          return (
            <Fragment>
              <Container>
                <h1 className="serviceMainTitle text-center">CLIENT SAYS</h1>
    
                <Slider {...settings}>
    
    
                  {myList}
    
    
    
                </Slider>
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

export default Review;