import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Fontawesomeicons";
import { BrowserRouter as Router, Routes, Route, Link }
  from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Programmes from './components/Programmes';
import Admission from './components/Admission';
function App() {
  return (
    <div>
      <Router >
        <div className="App">
          <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect className="border-shadow">
              <Navbar.Toggle className="coloring" />
              <Container>
                <Navbar.Collapse>
                  <Navbar.Brand as={Link} to="./Home"> <img src={logo} width="40px" height="40px" alt="LOGO" />{' '}
                  </Navbar.Brand>
                  <Nav className="ms-auto ">
                    <Nav.Link as={Link} to="./Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="./About">About</Nav.Link>
                    <Nav.Link as={Link} to="./Programmes">Programmes</Nav.Link>
                    <Nav.Link as={Link} to="./Admission">Admissions</Nav.Link>
                    <Nav.Link as={Link} to="./Contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <br />
          </>
          <div>
            <Routes>

              <Route exact path='/' element={<Home />} />
              <Route exact path='/Home' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Programmes' element={<Programmes />} />
              <Route path='/Admission' element={<Admission />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;