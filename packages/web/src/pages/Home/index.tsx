import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../../components/Hero';
import { StyledHome } from './styles';

const Home = () => (
  <StyledHome>
    <Hero>
      <Container>
        <Row />
        <Row>
          <Col />
          <Col xs={10}>
            <Jumbotron>
              <h1>Welcome to Sohda</h1>
              <p>
                A new platform where content creators can find resources for
                their streams, regardless if they're free or paid.
              </p>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
        <Row />
      </Container>
    </Hero>
    <Hero withBg>
      <h1>Test</h1>
    </Hero>
  </StyledHome>
);

export default Home;
