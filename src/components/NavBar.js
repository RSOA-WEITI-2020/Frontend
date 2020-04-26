import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';





export function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/Account">Account Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <LinkContainer to="/Account/UserInfo">
              <NavItem>User Info</NavItem>
            </LinkContainer>
            <LinkContainer to="/Account/Orders">
              <NavItem>Orders</NavItem>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

