import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Navi() {
    return (
    <>
        <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="#top">Project Sekai Card Info Cheatsheet</Navbar.Brand>
        </Container>
      </Navbar>
    </>
    );
  }
  
export default Navi;