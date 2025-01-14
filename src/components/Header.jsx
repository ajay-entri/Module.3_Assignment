import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Cart from './Cart';

function Header() {
    const cartItems = useSelector((state) => state.cart.value)
    console.log(cartItems, "cartitem");

    return (
        <Navbar expand="lg" className="bg-dark navbar-dark sticky-top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

                    </Nav>
                    <Cart />

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header
