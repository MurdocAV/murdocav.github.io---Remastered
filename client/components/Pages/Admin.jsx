import React from 'react'
import { connect } from 'react-redux'
import { getItems, saveItem, stopEditing } from '../../actions/items'
import MiddleDivider from '../Cards/MiddleDivider'
class Admin extends React.Component {
  state = {
    displayOutput: ''
  }
  
  getItemsFromStore () {
    const { dispatch } = this.props
    let items = dispatch(getItems()).items

    let renderOutput = items.map(formNo => {
      let displayCard = <MiddleDivider data={formNo} />
      return (
        <li onClick={() => this.setState({displayOutput: displayCard})} data={formNo} key={formNo.id}>{formNo.name}</li>
        )
      })
    
    renderOutput = <ul>{renderOutput}</ul>
    this.setState({displayOutput: renderOutput})
    console.log(renderOutput)
  }

  render () {
    const { dispatch } = this.props
    return (
      <React.Fragment>
        <div className="main">
          <button onClick={() => this.getItemsFromStore()}>Load Data</button>
          <h1>Click on a name to load the details</h1>
          <p>Sorting and further expansion of DB functions incoming, via SQL db</p>
        </div>  
        <div className="formMUIContainer">
          {this.state.displayOutput}
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(Admin)