import React from 'react';
import { Router, NavLink,Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Navbar,Nav,NavDropdown,FormControl,Form } from 'react-bootstrap'
import { userActions, viewActions } from '../_actions';
import profileIcon from '../Assets/images/profile_icon.png'
import logo from '../Assets/images/logo.png'

import './style.css'


class NavbarComponent extends React.Component {

    render() {
        const { user } = this.props;
        return (  
            <div>
             <Navbar fixed="top" height="60px" bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/" >
                    <img
                    alt=""
                    src={logo}
                    width="120"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/ssc">SSC</Nav.Link>
                    <Nav.Link as={Link} to="/mains">JEE  Mains</Nav.Link>
                    <Nav.Link as={Link} to="/quizs">Quiz</Nav.Link>
                    <Nav.Link as={Link} to="/puzzles">Puzzle</Nav.Link>
                    </Nav>
                   
                    <Form inline>   
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    <NavDropdown title="Dropdown" 
                   title={
                    <img className="thumbnail-image profile-image" 
                            src={profileIcon} 
                            alt="user pic"
                        />
                  }
                    id="basic-nav-dropdown">
                        { user ?
                        <div>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </div> 
                        :
                        <NavDropdown.Item onClick={()=> this.props.showLogin()}>Login</NavDropdown.Item>
                        }
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication, view } = state;
    const { user } = authentication;
    return { user };
}

const actionCreators = {
    showLogin: viewActions.showLogin
}

const connectedNavbarComponent = connect(mapState,actionCreators)(NavbarComponent);
export { connectedNavbarComponent as NavbarComponent };