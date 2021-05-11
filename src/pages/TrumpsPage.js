import React, { Component, Fragment } from 'react';
import Footer from '../component/Footer/Footer';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';
import TrumpsDetails from '../component/TrumpsDetails/TrumpsDetails';


class TrumpsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Trumps Policy"/>
                <TopPage pageTitle="Trumps Policy"/>
                <TrumpsDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TrumpsPage;