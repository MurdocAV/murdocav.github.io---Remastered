import React from 'react'
import ImageDrawer from '../../ImageDrawer'

class Projects extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='mainComponent'>
          <a className='noDecoration aTag' href='https://github.com/MurdocAV' key={'github'} replace={true}>
            <img className='gitHubLogo grow' src="images/GitHubLogo.png" alt="GitHub Logo"/>
          </a>
        </div>
        <div className='imageDrawer'>
          <ImageDrawer></ImageDrawer>
        </div>
      </React.Fragment>
    )
  }
}

export default Projects