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
            <Nav.Link href="#QuemSomosNos" className='text-light'>Quem Somos Nos</Nav.Link>
            <Nav.Link href="#LideresDaEquipe" className='text-light' >Lideres da Equipe</Nav.Link>
            <Nav.Link href="#Celulas" className='text-light'>Celulas</Nav.Link>
            <Nav.Link href="#GritoDeGuerra" className='text-light'>Grito De Guerra</Nav.Link>
            <Nav.Link href="#GritoDeGuerra" className='text-light'>Noosa Igreja</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
