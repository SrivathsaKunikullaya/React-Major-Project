import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link }
  from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap"
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Toggle className="coloring" />
            <Container>
              <Navbar.Collapse>
                <Navbar.Brand as={Link} to="./Home"> <img src={logo} width="40px" height="40px" alt="LOGO" />{' '}
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="./Home">Home</Nav.Link>
                  <Nav.Link as={Link} to="./Services">Services</Nav.Link>
                  <Nav.Link as={Link} to="./Products">Products</Nav.Link>
                  <Nav.Link as={Link} to="./About">About</Nav.Link>
                  <Nav.Link as={Link} to="./Contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <br />
        </>
        <div>
          <Routes>

            <Route exact path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Products' element={<Products />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;