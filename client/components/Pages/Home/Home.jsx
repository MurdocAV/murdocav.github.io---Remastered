import React from 'react'
import Center from '../../Center'
import ImageDrawer from '../../ImageDrawer'
// import * as THREE from 'three'


class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Center></Center>
        <div className='imageDrawer'><ImageDrawer /></div>
      </React.Fragment>
    )
  }
}

export default Home