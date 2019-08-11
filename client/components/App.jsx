import React from 'react'
import Center from './Center'
import Header from './Appbar/Header'
import Navigation from './Navigation'
import Projects from './Projects'
import Blank from './Blank'
import ImageDrawer from './ImageDrawer'
import {HashRouter, Route} from 'react-router-dom'

//TODO: Test out Material U.I.; 
//  1. Use Material's grid to make layered mobile first Responsive U.I.
//  1.1. Allow user to see the mobile view on desktop
//  2. Use 'Drawer' component to switch between different components(pages)
//  S1. Optional (Strech) --> Use breadcrumbs to do complex navigations.
//  S2. (Strech) --> Advanced Grid list with titlebars (images of worked projects)


class App extends React.Component {
  render () {
    return (
      <HashRouter>
        {/* <Header />
        <Center></Center>
        <div className='imageDrawer'><ImageDrawer /></div> */}
      </HashRouter>
    )
  }
}

export default App
