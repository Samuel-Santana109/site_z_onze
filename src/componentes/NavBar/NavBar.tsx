//import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <Navbar  expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Zero Um</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#NossaHistoria" className='text-light'>Nossa Historia</Nav.Link>
            <Nav.Link href="#LideresDaEquipe" className='text-light' >Lideres da Equipe</Nav.Link>
            <Nav.Link href="#Celulas" className='text-light'> Nossas Celulas</Nav.Link>
            <Nav.Link href="#Horarios" className='text-light'>Horarios Cultos Arena</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
