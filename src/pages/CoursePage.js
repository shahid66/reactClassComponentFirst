import React, { Component, Fragment } from 'react';
import AllCourses from '../component/AllCourser/AllCourses';
import Footer from '../component/Footer/Footer';
import TopNavbar from '../component/TopNavbar/TopNavbar';
import TopPage from '../component/TopPage/TopPage';

class CoursePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
<Fragment>
<TopNavbar title="Course"/>
    <TopPage pageTitle="ALL Courses"/>
    <AllCourses />
    <Footer/>
</Fragment>
        );
    }
}

export default CoursePage;