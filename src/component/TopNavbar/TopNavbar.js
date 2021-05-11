import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css';
import {  Nav, Navbar } from 'react-bootstrap';
import logo from '../../asset/images/navlogo.svg';
import logoscroll from '../../asset/images/navlogoScroll.svg';
import { NavLink } from 'react-router-dom';

class TopNavbar extends Component {

    constructor(props){
        super();
        this.state={
            navTitle:"navTitle",
            navLogo:[logo],
            navVarient:"dark",
            navBackground:"navBackground",
            navItem:"navItem",
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navTitle:'navTitleScroll',navLogo:[logoscroll],navBackground:'navBackgroundScroll',navItem:"navItemScroll",navVarient:"light"})
        }
        else if(window.scrollY<100){
            this.setState({navTitle:'navTitle', navLogo:[logo],navBackground:'navBackground',navItem:"navItem",navVarient:"dark"})
        }
    }
componentDidMount(){
    window.addEventListener('scroll',this.onScroll)
}

    render() {
        return (
            <Fragment>
              <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBackground} fixed="top" collapseOnSelect expand="lg"  variant={this.state.navVarient}>
                <Navbar.Brand ><NavLink className={this.state.navTitle} to="/"><img src={this.state.navLogo} alt="logo"/> KK.SHAHID</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/">HOME</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/services">SERVICES</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/course">COURSE</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/contact">CONTACT</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/about">ABOUT</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavbar;