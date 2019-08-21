import React from "react";
import {Link} from 'react-router-dom'

class Center extends React.Component {
  
  runPrompt() {
    let passphrase = prompt('Enter password (admin)')
    while (passphrase !== 'admin') {
      passphrase = prompt('Enter password (admin)')
    }
  }
  
  render () {
    return (
      <React.Fragment>
        <div className='mainComponent'>
          <Link onClick={this.runPrompt} className="link" to='/Admin'>Admin Login</Link>
          <br />
          <p className="typewriter line-1 anim-typewriter">{this.props.typographyMessage}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Center