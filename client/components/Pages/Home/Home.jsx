import React from 'react'
import { connect } from 'react-redux'
import Center from '../../Center'
import Form from '../Form/Form'
import MiddleDivider from '../../Cards/MiddleDivider'
import { addItem } from '../../../actions/items'

class Home extends React.Component {
  state = {
    submited: false,
    typographyMessage: 'Enter sign in details below...'
  } 

  isSubmited = (formData) => {
    const {dispatch} = this.props
    this.setState({submited: true,
    typographyMessage: 'Thanks for your response',
    formData
    })
    dispatch(addItem(formData))
  }

  renderHandler = () => {
    if (this.state.submited == true)  {
      return (
        <MiddleDivider data={this.state.formData}/>
      )
    } else {
      return (
        <Form isSubmited={this.isSubmited}></Form>
      )
    }
  }

  handleReduxData = (formData) => {
    // const input = dispatch(getItems())
    // console.log(input)
  }

  render () {
    return (
      <React.Fragment>
        <Center typographyMessage={this.state.typographyMessage}></Center>
        <div className="formMUIContainer">
          {this.renderHandler()}
          {this.handleReduxData()}
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(Home)