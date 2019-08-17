import React from 'react'
import { connect } from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'

import About from './Pages/About'
import Documentation from './Pages/Documentation'
import Home from './Pages/Home/Home'

import Header from './Appbar/Header'

import {activePage, goToPage} from '../actions/index'

//TODO: Test out Material U.I.; 
//  1. Use Material's grid to make layered mobile first Responsive U.I.
//  1.1. Allow user to see the mobile view on desktop
//  2. Use 'Drawer' component to switch between different components(pages)
//  S1. Optional (Strech) --> Use breadcrumbs to do complex navigations.
//  S2. (Strech) --> Advanced Grid list with titlebars (images of worked projects)


class App extends React.Component {
  state = {}
  
  promptForReduxPage = () => {
    var input = prompt("Please enter the page you want to go to", "Home");
    console.log('User input:', input)
    console.log('Before Page:', this.props.page)
    return
  }

  switchPage = (pageName) =>  {
    dispatch.goToPage('About')
    console.log('After Page:', this.props.page)
  }
  
  render () {
    return (
      <HashRouter>
        <Header />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/Documentation" component={Documentation} />
        <Route exact path="/About" component={About} /> */}
        <button className='main' onClick={() => {this.promptForReduxPage()}}>Click me</button>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.page
  }
}

export default connect (mapStateToProps)(App)
