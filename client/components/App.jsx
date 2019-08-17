import React from 'react'
import { connect } from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'

import About from './Pages/About'
import Documentation from './Pages/Documentation'
import Email from './Pages/Email'
import References from './Pages/References'
import Home from './Pages/Home/Home'
import Hiring from './Pages/Hiring'

import Header from './Appbar/Header'

import {activePage, goToPage} from '../actions/index'

//TODO: Test out Material U.I.; 
//  1. Use Material's grid to make layered mobile first Responsive U.I.
//  1.1. Allow user to see the mobile view on desktop
//  2. Use 'Drawer' component to switch between different components(pages)
//  S1. Optional (Strech) --> Use breadcrumbs to do complex navigations.
//  S2. (Strech) --> Advanced Grid list with titlebars (images of worked projects)


class App extends React.Component {

  // Working for modifying state in the redux store but does not actually go to any pages.
  switchPage = (pageName) =>  {
    const {dispatch} = this.props
    dispatch(goToPage(pageName))
  }
  
  render () {
    return (
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Home} />
        <Route exact path="/Uses" component={About} />
        <Route exact path="/References" component={References} />
        <Route exact path="/Email" component={Email} />
        <Route exact path="/Hiring" component={Hiring} />
        <Route exact path="/Documentation" component={Documentation} />
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

export default connect (mapStateToProps)(App)
