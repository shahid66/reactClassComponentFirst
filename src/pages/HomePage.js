import React, { Component, Fragment } from 'react';
import Video from '../component/video/video';
import Analysis from '../component/Analysis/Analysis';
import Course from '../component/Course/Course';
import Footer from '../component/Footer/Footer';
import Project from '../component/Project/Project';
import Review from '../component/Review/Review';
import Services from '../component/Services/Services';
import Summary from '../component/Summary/Summary';
import TopBanner from '../component/TopBanner/TopBanner';
import TopNavbar from '../component/TopNavbar/TopNavbar';

class HomePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                    <TopNavbar title="Home"/>
                    <TopBanner/>
                    <Services/>
                    <Analysis/>
                    <Summary/>
                    <Project/>
                    <Course/>
                    <Video/>
                    <Review/>
                    <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;