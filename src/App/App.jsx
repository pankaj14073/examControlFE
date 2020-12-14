import React from 'react';
import { Router , Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavbarComponent } from './../NavbarComponent'
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomeComponent } from '../HomeComponent';
import  SSCPage from '../Pages/SSCPage'
import './style.css'
import { LoginModal } from '../Modals/LoginModal'

class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
            <Router history={history}>
            <LoginModal></LoginModal>
            <NavbarComponent></NavbarComponent>
            <div className='main'>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/ssc" component={SSCPage} />
                {/* <Route path="/mains" component={HomePage} />
                <Route path="/cbse" component={HomePage} />
                <Route path="/quiz" component={HomePage} />
                <Route path="/puzzeles" component={HomePage} /> */}
                <Redirect from="*" to="/" />
            </Switch>
            </div>
            </Router>
                <div className="d-flex flex-column">
                    <footer className="footer">
                        <div>
                        <span>&copy; 2020 Exam Control.</span>
                        </div>
                        <div className="ml-auto">
                        <span>Powered by</span><br></br>
                        <a href="##">EC</a>
                        </div>
                    </footer>
                </div>
             </div>
                   
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };