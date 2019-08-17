import React from 'react'
import { connect } from 'react-redux'

import About from './About'
import Header from './Appbar/Header'
import Home from './Home/Home'
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
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

export default connect (mapStateToProps)(App)
