import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Tasks from '../components/Tasks';
import TaskDetail from '../components/TaskDetail';

class App extends Component {
  state = {  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12} md={6} className="no-pad left-wrapper">
            <Sidebar />
            <Tasks />
          </Col>
          <Col sm={12} md={6} className="no-pad right-wrapper">
            <TaskDetail />
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default App;