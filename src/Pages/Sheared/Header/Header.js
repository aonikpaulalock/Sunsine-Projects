import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import '../../Styles/Header.css'
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar collapseOnSelect className="py-3 Nav-Bg" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="Nav-Title">
          WEDDING_PHOTOGRAPHY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="mx-auto">
            <Nav.Link href="/home#SERVICES" className="fw-bold">SERVICES</Nav.Link>
            <Nav.Link href="/home#REVIEW" className="fw-bold">REVIEW</Nav.Link>
          </Nav> */}
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to="/checkout" className="fw-bold">CHECKOUT</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-bold">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="fw-bold">BLOGS</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="fw-bold">
              SIGNUP
            </Nav.Link>
            {!user ?
              <Nav.Link as={Link} to="/login" className="fw-bold">LOGIN</Nav.Link>
              :
              <Nav.Link className="fw-bold" onClick={() => signOut(auth)}>LOGOUT</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;