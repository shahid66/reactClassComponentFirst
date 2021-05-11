import React, { Component, Fragment } from 'react';
import CourseDetails from '../component/CourseDetails/CourseDetails';
import Footer from '../component/Footer/Footer';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';

class CourseDetailPage extends Component {

    constructor({match}){
        super();
        this.state={
            courseID:match.params.courseID,
            coursename:match,
        }
    }

    componentDidMount(){
        window.scroll(0,0)
        console.log(this.state.coursename)
    }
    render() {
        return (
            <Fragment>
            <TopNavbar title="Course"/>
                {/* <TopPage pageTitle="ALL Courses"/> */}
                <CourseDetails id={this.state.courseID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailPage;