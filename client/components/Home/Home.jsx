import React from 'react'
import Center from '../Center'
import Header from '../Appbar/Header'
import ImageDrawer from '../ImageDrawer'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Center></Center>
        <div className='imageDrawer'><ImageDrawer /></div>
      </React.Fragment>
    )
  }
}

export default Home
