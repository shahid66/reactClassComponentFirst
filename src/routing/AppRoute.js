import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import CoursePage from '../pages/CoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import RefundPage from '../pages/RefundPage';
import TrumpsPage from '../pages/TrumpsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailPage from '../pages/CourseDetailPage';


class AppRoute extends Component {
    render() {
        return (
<Fragment>

            <Switch>

                <Route exact path="/" component={HomePage} />
                <Route exact path="/services" component={ServicePage} />
                <Route exact path="/course" component={CoursePage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/refund" component={RefundPage} />
                <Route exact path="/trumpsPolicy" component={TrumpsPage} />
                <Route exact path="/projectDetails/:projectID/:projectname" component={ProjectDetailsPage} />
                <Route exact path="/courseDetails/:courseID" component={CourseDetailPage} />
                

            </Switch>

</Fragment>
        );
    }
}

export default AppRoute;