import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import '../ComponentCss/NaviBar.css'
import {signOut} from '../actions/isLoggedActions'
import {getOrders} from '../actions/ordersActions'
import {connect} from 'react-redux';




class NaviBar extends Component{
  handleLogOut(){
    this.props.LogOut()
  }

  handleOrders(){
    this.props.getOrders()
  }
  render(){
    return(
      
        <Navbar bg="light" expand="lg">
          <Navbar.Brand ><Link to="/Account">Account Management</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Link to="/Account/UserInfo">
                User Info
              </Link>
              <Link to="/Account/Orders" onClick = {()=>this.handleOrders()}>
                Orders
              </Link>
              <Link to="/" onClick = {()=>this.handleLogOut()}>
                Log Out
              </Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    LogOut: () => dispatch(signOut()),
    getOrders: () => dispatch(getOrders())

  }
}

export default connect(null,mapDispatchToProps)(NaviBar);