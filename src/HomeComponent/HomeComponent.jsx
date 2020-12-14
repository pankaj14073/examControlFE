import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import './style.css'
import { viewActions } from '../_actions/view.actions';


class HomeComponent extends React.Component {

    componentDidMount() {
        window.goMovie();
    }

    _conductExam()
    {
        const { user } = this.props;
        if(user)
        {

        }
        else{
            this.props.showLogin();
        }
        
    }

    render() {
        const { user } = this.props;
        debugger;
        return (
    <div>
    <div>
        <div className='main'>
            <div className="about-container">
                <p>ExamControl is one of the most potent web-based online computer-based software to give/take online tests, in the real, simple, proficient with a similar test interface. The Web-based Online computer test software is accessible from anywhere at any time.</p>
            </div>
            <div className='option-container'>
                    <button onClick={() => this._conductExam()} className='option'>Conduct Exam</button>
                    <button onClick={() => this._conductExam()} className='option' >Give Exam</button>
            </div>
            <div className='canvas-container' >
            <canvas id="nokey"></canvas>
            </div>
        </div>
    </div> 
    </div>
            /*<div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>*/
        );
    }
}

function mapState(state) {
    debugger;
    const { authentication } = state;
    const { user } = authentication;
    return { user};
}

const actionCreators = {
    showLogin: viewActions.showLogin
}

const connectedHomePage = connect(mapState, actionCreators)(HomeComponent);
export { connectedHomePage as HomeComponent };