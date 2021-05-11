import React, { Component, Fragment } from 'react';
import Footer from '../component/Footer/Footer';
import ServiceDetails from '../component/ServiceDetails/ServiceDetails';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';
import ProjectDetails from '../pages/ProjectDetailsPage';

class ProjectDetailsPage extends Component {

    constructor({match}){
        super();
        this.state={
            projectID:match.params.projectID,
            projectname:match.params.projectname
        }
    }

    componentDidMount(){
        window.scroll(0,0)
        
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Project Details"/>
                <TopPage pageTitle={this.state.projectname}/>
                <ServiceDetails id={this.state.projectID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;