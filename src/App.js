import logo from './logo.svg';
import './App.css';
import server from './server.js'
import { Button, Form } from 'react-bootstrap';



function App() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="city" placeholder="Enter City" />
      
      </Form.Group>

      

      
      <Button variant="primary" type="submit">
        Explore!!
      </Button>
    </Form>
  );
}

export default App;
