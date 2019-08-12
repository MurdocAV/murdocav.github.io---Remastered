import React from 'react'
import Drawer from './Drawer'
import AppBar from './AppBar'

class Header extends React.Component {
  // state = ({
  //   bool: false
  // })
  
  // drawerHandler() {
  //   this.setState({
  //     bool: !this.state.bool
  //   })
  // }
  
  render () {
    return (
      <React.Fragment>
        <Drawer></Drawer>
      </React.Fragment>
    )
  }
}

export default Header
