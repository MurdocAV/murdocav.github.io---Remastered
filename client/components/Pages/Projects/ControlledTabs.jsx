import React from 'react'
import Tab from 'react-bootstrap'
import Tabs from 'react-bootstrap'

export default function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home">
        <p>Hello</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Hello</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>Hello</p>
      </Tab>
    </Tabs>
  );
}