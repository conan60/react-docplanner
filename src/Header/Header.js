import React from 'react';
import './Header.css';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';

const Header = ()=>{
    return(
      <Container fluid={true} id="header-nav">
          <Container>
          <Navbar bg="" expand="lg">
          <Navbar.Brand href="#home"><img id="logo-header" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Logo docplanner"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#">About us</Nav.Link>
              <Nav.Link href="#">Career</Nav.Link>
              <NavDropdown title="Departments" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Marketing & PR</NavDropdown.Item>
                <NavDropdown.Item href="#">Customer success & sales</NavDropdown.Item>
                <NavDropdown.Item href="#">IT, Product, Design & UX</NavDropdown.Item>
                <NavDropdown.Item href="#">Finance & Administration</NavDropdown.Item>
                <NavDropdown.Item href="#">HR & More</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
}
    

export default Header;