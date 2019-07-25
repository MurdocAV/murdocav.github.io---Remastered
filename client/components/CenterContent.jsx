import React from 'react'
import { Row, Col, DemoBox } from 'elemental' 

class Center extends React.Component {
  
  render () {
    return (
      <Row>
        <Col sm="1/3">
          <DemoBox>One Third</DemoBox>
        </Col>
        <Col sm="1/3">
          <DemoBox>One Third</DemoBox>
        </Col>
        <Col sm="1/3">
          <DemoBox>One Third</DemoBox>
        </Col>
      </Row>
    )
  }
}

export default Center

