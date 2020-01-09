import React from 'react'
import CardsCombined from './List/CardsCombined'

class Projects extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='mainComponent'>
          <a className='noDecoration aTag' href='https://github.com/MurdocAV' key={'github'} replace={true}>
            <img className='gitHubLogo grow' src="images/GitHubLogo.png" alt="GitHub Logo"/>
          </a>
          <div>
          <a className='noDecoration aTag iconbyfreepik' href='/Azaan Virk.pdf' key={'github'} replace={true} download>
            <img className='cvLogo grow' src="images/CV.png" alt="CV Logo"/>
          </a>
        </div>
        </div>
        <div className='imageDrawer'>
          <CardsCombined></CardsCombined>
        </div>
      </React.Fragment>
    )
  }
}

export default Projects