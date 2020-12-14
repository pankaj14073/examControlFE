
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap'
import React from 'react'
import './style.css'

class SideMenuComponent extends React.Component{


getMenu(data)
{
        return (
        data.menu.map((sidebarItem, index) => (
            (sidebarItem.title  ) &&<Nav.Link key={sidebarItem.key}>{sidebarItem.title}</Nav.Link> 
            ))
    );
} 

render(){
        const { user, users } = this.props;
        const { data } = users; 
        debugger;
        return(
        <div className='side-menu'>
            <Nav defaultActiveKey="/home" className="flex-column">
                {
                data? this.getMenu(data)
                :       
                <div>Menu</div>
                }
            </Nav>
        </div>
    )};
}



function mapState(state,view)
{
debugger;
 const { users, authentication } = state;
 const { user } =  authentication;
 return { user, users };
}

const connectedLoginModal = connect(mapState)(SideMenuComponent);
export { connectedLoginModal as SideMenuComponent };
