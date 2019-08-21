import React from 'react'
import Center from '../../Center'
import Form from '../Form/Form'
import InsetDivider from '../../Cards/InsetDivider'

class Home extends React.Component {
  state = {
    sumbited: false
  } 

  isSubmited = () => {
    this.setState({subited: true})
  }

  renderCompletion = () => {

  }

  render () {
    return (
      <React.Fragment>
        <Center></Center>
        <div className="formMUIContainer">
          <InsetDivider/>
          {/* <Form isSubmited={isSubmited}></Form> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Home