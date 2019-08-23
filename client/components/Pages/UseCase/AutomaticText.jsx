import React from "react";

class AutomaticText extends React.Component {
  render () {
      return (
        <React.Fragment>
          <div className='mainComponent'>
            <p className="typewriter line-1 anim-typewriter">{this.props.typographyMessage}</p>
          </div>
        </React.Fragment>
      )
  }
}

export default AutomaticText