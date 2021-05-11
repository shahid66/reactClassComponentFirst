import React, { Component, Fragment } from 'react';
import ContactSection from '../component/ContactSection/ContactSection';
import Footer from '../component/Footer/Footer';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';

class ContactPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
<Fragment>
<TopNavbar title="Contact"/>
    <TopPage pageTitle="Contact US"/>
    <ContactSection/>
    <Footer/>
</Fragment>
        );
    }
}

export default ContactPage;