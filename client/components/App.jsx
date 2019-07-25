import React from 'react'
import CenterContent from './CenterContent'

class App extends React.Component {
  
  render () {
    return (
      <React.Fragment>
        <h1 className="name">MurdocAV</h1>
        <img className="profilePhoto" src="https://via.placeholder.com/185" alt="Photo of a developer #KanyeWest2020"/>
        {/* <CenterContent></CenterContent> */}
      </React.Fragment>
    )
  }
}

export default App

