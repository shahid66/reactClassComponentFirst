import React, { Component, Fragment } from 'react';
import AboutDescription from '../component/AboutDescription/AboutDescription';
import Footer from '../component/Footer/Footer';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';

class AboutPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="About"/>
                <TopPage pageTitle="About ME"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;