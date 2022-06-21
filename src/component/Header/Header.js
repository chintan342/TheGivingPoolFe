import React from "react";
import {Navbar,Offcanvas,Nav,Container} from 'react-bootstrap'
// import { NavLink } from "react-router-dom";

import logo from '../../assets/images/logo.png';

function Header() {
    return (
      <>
      {
        <header>
          <div className="bg-overlay">
            <Navbar key="lg" expand="lg">
          <Container>
            <Navbar.Brand href="LandingPage" className="m-0"><h1><img src={logo} alt="Crypto Currency" title="Crypto Currency"/></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="">
                  <Nav.Link href="#action1" className="btn-primary"><span>THE GIVING pool</span></Nav.Link>
                  <Nav.Link href="Roadmap">Roadmap</Nav.Link>
                  <Nav.Link href="Whitepaper">WHITEPAPER</Nav.Link>
                  <Nav.Link href="Tokenomics">Tokenomics</Nav.Link>
                  <Nav.Link href="#action5" className="btn-primary"><span>CHART</span></Nav.Link>
                  <Nav.Link href="#action6" className="btn-primary"><span>BUY NOW</span></Nav.Link>
                  <Nav.Link href="#action7" className="btn-primary"><span>CONNECT WALLET</span></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
          </div>
      </header> 
      }
      </>
    );
  }
  
  export default Header;