import React from 'react'
import Center from '../../Center'
import Form from '../Form/Form'
import InsetDivider from '../../Cards/InsetDivider'
import MiddleDivider from '../../Cards/MiddleDivider'

class Home extends React.Component {
  state = {
    sumbited: false,
    typographyMessage: 'Enter sign in details below...'
  } 

  isSubmited = (formData) => {
    this.setState({subited: true,
    formData,
    typographyMessage: 'Thanks for your response'
    })
    console.log('Logging home state')
    console.log(this.state)
  }

  renderCompletion = () => {
    return
  }

  render () {
    return (
      <React.Fragment>
        <Center typographyMessage={this.state.typographyMessage}></Center>
        <div className="formMUIContainer">
          {/* <MiddleDivider/> */}
          <Form isSubmited={this.isSubmited}></Form>
        </div>
      </React.Fragment>
    )
  }
}

export default Home