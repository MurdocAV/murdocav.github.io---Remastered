import React from 'react'
import Center from './Center'
import Navigation from './Navigation'
import {Router} from 'react-router-dom'

//TODO: Test out Material U.I.; 
//  1. Use Material's grid to make layered mobile first Responsive U.I.
//  1.1. Allow user to see the mobile view on desktop
//  2. Use 'Drawer' component to switch between different components(pages)
//  S1. Optional (Strech) --> Use breadcrumbs to do complex navigations.
//  S2. (Strech) --> Advanced Grid list with titlebars (images of worked projects)


class App extends React.Component {
  render () {
    return (
      <Router>
        <Navigation></Navigation>
        <h1 className="name">MurdocAV</h1>
        <img className="profilePhoto" src="https://via.placeholder.com/185" alt="Photo of a developer #KanyeWest2020"/>
        <Center />
      </Router>
    )
  }
}

export default App;
