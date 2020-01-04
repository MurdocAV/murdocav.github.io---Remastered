/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import AutomaticText from './AutomaticText'
import Form from './Form/Form'
import MiddleDivider from '../../Cards/MiddleDivider'
// import { addItem } from '../../../actions/items'

class UseCase extends React.Component {
  state = {
    submited: false,
    typographyMessage: 'Enter sign in details'
  }

  isSubmited = (formData) => {
    // const {dispatch} = this.props
    this.setState({submited: true,
    typographyMessage: 'Response Submitted',
    formData
    })
    // dispatch(addItem(formData))
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

  render () {
    return (
      <React.Fragment>
        <AutomaticText typographyMessage={this.state.typographyMessage}></AutomaticText>
        <div className="formMUIContainer">
          {this.renderHandler()}
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(UseCase)