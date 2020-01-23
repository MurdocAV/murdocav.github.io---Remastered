import React from 'react'
import { connect } from 'react-redux'
import {HashRouter, Route, Redirect} from 'react-router-dom'
import background from './ThreeBg'

import About from './Pages/About/About'
import Documentation from './Pages/Documentation'
import Email from './Pages/Email'
import References from './Pages/References'
import Home from './Pages/Home/Homepage'
import Projects from './Pages/Projects/Projects'
import Hiring from './Pages/Hiring'
import Example from './Pages/Example/Example'
import Navigation from './Header/Navigation'
import Header from './Appbar/Header'

import {activePage, goToPage} from '../actions/index'

class App extends React.Component {

  // Working for modifying state in the redux store but does not actually go to any pages.
  switchPage = (pageName) =>  {
    const {dispatch} = this.props
    dispatch(goToPage(pageName))
  }
  
  render () {
    // Ensures that the animation is always smooth, runnning everytime the render method is called.
    background(0x839ce7, 0x000000)

    // Following is conditional rendering for different screen sizes.

    let width = window.innerWidth;

    if (width < 768) {
      return (
        // Mobile sizes
        <HashRouter>
          <Header />
          <Route exact path="/">
            <Redirect to="/Home"/>
          </Route>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/ExampleForm" component={Example} />
          <Route exact path="/References" component={References} />
          <Route exact path="/Email" component={Email} />
          <Route exact path="/Hiring" component={Hiring} />
          <Route exact path="/Documentation" component={Documentation} />
        </HashRouter>
      )
    } else {
      return (
        // Desktop sizes
        <HashRouter>
          <Navigation />
          <Route exact path="/">
            <Redirect to="/Home"/>
          </Route>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/ExampleForm" component={Example} />
          <Route exact path="/References" component={References} />
          <Route exact path="/Email" component={Email} />
          <Route exact path="/Hiring" component={Hiring} />
          <Route exact path="/Documentation" component={Documentation} />
        </HashRouter>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

export default connect (mapStateToProps)(App)