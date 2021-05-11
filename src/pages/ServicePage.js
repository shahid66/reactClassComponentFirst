import React, { Component, Fragment } from 'react';
import Footer from '../component/Footer/Footer';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import Services from '../component/Services/Services';
import TopPage from '../component/TopPage/TopPage';

import ContactSection from '../component/ContactSection/ContactSection';

class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Services"/>
                <TopPage pageTitle="MY SERVICES"/>
                <Services title="false" />
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;