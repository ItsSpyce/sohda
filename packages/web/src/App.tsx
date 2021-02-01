import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './App.styles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import theme from './theme';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledApp>
      <Router>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="/">Sohda</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          {/* <Navbar.Collapse id="navbar-nav" />
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
          </NavDropdown> */}
        </Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </StyledApp>
  </ThemeProvider>
);

export default App;
