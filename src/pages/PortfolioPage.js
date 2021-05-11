import React, { Component, Fragment } from 'react';
import AllProjects from '../component/AllProjects/AllProjects';
import Footer from '../component/Footer/Footer';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';

class PortfolioPage extends Component {



    componentDidMount(){
        window.scroll(0,0)
        

    }
    render() {
       
        return (
<Fragment>
<TopNavbar title="Portfolio"/>
    <TopPage pageTitle="ALL Projects"/>
    <AllProjects />
    <Footer/>
</Fragment>
        );
    }
}

export default PortfolioPage;