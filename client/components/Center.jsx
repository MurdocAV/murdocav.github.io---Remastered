import React from "react";

class Center extends React.Component {  
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className='mainComponent'>
          <p className="typewriter line-1 anim-typewriter">{this.props.typographyMessage}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Center