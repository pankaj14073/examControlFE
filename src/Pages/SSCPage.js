import React from 'react'
import {connect}  from 'react-redux'
import { userActions } from '../_actions';
import { SideMenuComponent } from '../SideMenuComponent'
import { ContentComponent } from '../ContentComponent'
import './style.css'

class SSCPage extends React.Component
{

    componentDidMount() {
        debugger;
        this.props.getQuestions();
    }

    render()
    {
        const { user, users } = this.props;
        const { data } = users; 
        return(
            <div>
            {users.loading ? <em>Loading questions...</em>
            :
            data && 
            <div>
            <SideMenuComponent></SideMenuComponent>
            <div className='content'>
            <ContentComponent questions ={data.content['important_question']}></ContentComponent>
            </div>
            </div>
            }
            </div>
        );
    }
}

function mapState(state,view)
{
debugger;
 const { users, authentication } = state;
 const { user } =  authentication;
 return { user, users };
}

const actionCreators = {
    getQuestions: userActions.getSSCQuestions,
}

export default connect(mapState,actionCreators)(SSCPage);

