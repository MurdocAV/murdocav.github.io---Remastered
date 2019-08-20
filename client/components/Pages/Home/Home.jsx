import React from 'react'
import Center from '../../Center'
import Form from '../Form/Form'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Center></Center>
        <div className="formMUI">
          <Form></Form>
        </div>
      </React.Fragment>
    )
  }
}

export default Home