import React from 'react';
import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">CS MIND</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="#features">About</Nav.Link>
      <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Innovations at CS MIND</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Aim at CS MIND</NavDropdown.Item>
           <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">3C at CS MIND</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Ventures" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Project1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Project2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Project3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">New Project</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Values" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vision</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mission</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Policy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Team" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Chairman</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Associates</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tanishk</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Harsh</NavDropdown.Item>
      </NavDropdown>
      
      <Nav.Link href="#deets">Contact</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
