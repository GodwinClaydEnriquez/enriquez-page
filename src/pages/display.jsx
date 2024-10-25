import { Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Registration from './registration';
import Login from './login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Display() {
  return (
    <Router>
        <Nav>
            <Nav.Item>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to="/registration">Registration</Link></Nav.Link>
            </Nav.Item>
        </Nav>
      <Container className='form-wrapper'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          {/* Add other routes as needed */}
        </Routes>
      </Container>
    </Router>
  );
}

export default Display;