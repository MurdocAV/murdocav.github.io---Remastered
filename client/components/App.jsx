import React from 'react'
import Center from './CenterContent'

//TODO: Test out Material U.I.; 
//  1. Use Material's grid to make layered mobile first Responsive U.I.
//  1.1. Allow user to see the mobile view on desktop
//  2. Use 'Drawer' component to switch between different components(pages)


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <h1 className="name">MurdocAV</h1>
        <img className="profilePhoto" src="https://via.placeholder.com/185" alt="Photo of a developer #KanyeWest2020"/>
        <Center />
      </React.Fragment>
    );
  }
}

export default App;
