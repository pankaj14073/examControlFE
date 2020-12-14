import { render } from "react-dom"
import { connect } from 'react-redux';
import { Button, Modal,FormControl,Form } from 'react-bootstrap'
import React from 'react'
import { viewActions } from '../../_actions';
import './style.css'

class LoginModal extends React.Component{

    render(){
        const { loginVisibilty } = this.props;
        return(
        <div className ='login-form'>
            <Modal show={loginVisibilty} onHide={() => this.props.hideLogin()}>
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group  controlId="formBasicEmail">
                            <label>Email address</label >
                            <input name="username" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <label>Password</label>
                            <input type="password"  name="password" placeholder="Password" />
                        </Form.Group>
                    <Button id='login-btn'type="submit">
                        Login
                    </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )};
}

function mapState(state) {
    const { authentication, view } = state;
    const { user } = authentication;
    const { loginVisibilty } = view;
    return { user , loginVisibilty };
}

const actionCreators = {
    hideLogin: viewActions.hideLogin
}

const connectedLoginModal = connect(mapState,actionCreators)(LoginModal);
export { connectedLoginModal as LoginModal };
