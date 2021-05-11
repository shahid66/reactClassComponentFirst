import React, { Component, Fragment } from 'react';
import Footer from '../component/Footer/Footer';
import RefundSection from '../component/RefundSection/RefundSection';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';

class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Refund Policy"/>
                <TopPage pageTitle="Refund Policy"/>
                <RefundSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;