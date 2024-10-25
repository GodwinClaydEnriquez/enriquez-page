import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './regist.css'
import Registration from './pages/registration';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Display from './pages/display';

function App() {
  return (
    <Display/>
  );
}

export default App;