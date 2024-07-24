import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">Dream Tapestry</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Anime</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Series</NavDropdown.Item>
                        <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
            </Container>
        </Navbar>
    );
}