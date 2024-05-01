import React from 'react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap'; // Import Bootstrap components

// App.js
const App = () => {
  return (
      <div>
          <h1>Hello, React!</h1>
          <p>This is a React component.</p>
      </div>
  );
};
/*
function App() {
  return (
    
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">My React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-4">
        <h1>Hello, Bootstrap in React!</h1>
        <Button variant="primary">Click me</Button>
      </div>
    </div>
  );
}

export default App;
