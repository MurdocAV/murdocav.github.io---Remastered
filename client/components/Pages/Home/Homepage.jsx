import React from 'react'
import { WorkTwoTone } from '@material-ui/icons'
import { Link } from 'react-router-dom'



class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='mainComponent'>
          <p className="typewriter line-1 anim-typewriter">
            Software Developer
          </p>
        </div>
        <div className='projects'>
          <Link className="noDecoration" to={'/Projects'} key={'Projects'} replace={true}>
            <WorkTwoTone fontSize='inherit' className="projectsIcon grow"></WorkTwoTone>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home