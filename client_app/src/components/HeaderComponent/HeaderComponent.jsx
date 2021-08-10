import React, { Component } from 'react';
import {Navbar, NavItem,  Link, Nav, NavDropdown, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


class HeaderComponent extends Component {
   
    render() { 
        return ( 
            <Navbar bg="light" expand="lg">
                <Container>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/devices'>
                            <Nav.Link>Device</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/data'>
                            <Nav.Link>Measurement</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         );
    }

   
}
 
export default HeaderComponent;