import { render } from '@testing-library/react';
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const BodyComponent = () => {

  return (
    <Container>
      <Row>
        <Col>Teste</Col>
      </Row>
    </Container>
  )

};

export default BodyComponent;
