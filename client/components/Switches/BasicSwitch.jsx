import React from 'react';
import Switch from '@material-ui/core/Switch';

export default class Switches extends React.Component {
  
  state = {
    checkedA: true,
    checkedB: false,
    checkedC: false
  }

  setStateFalse () {
    this.setState(
      {    
        checkedA: false,
        checkedB: false,
        checkedC: false
      }
    );
  }

  handleChange (event) {
    // This is also gonna flick all other themes off
    this.setStateFalse()
    this.setState({ [event.target.name]: event.target.checked })
  };
  
  render() {
    return (
      <div 
        style={{
          backgroundColor: 'white',
          margin: 'auto',
        }}
      >
        <div className='Classic Neon'>
          <Switch
          checked={this.state.checkedA}
          onChange={(e) => { this.handleChange(e) }}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <h2 color='pink'>Classic Neon</h2> 
        </div>
        <div className='Orange Sherbet'>
          <Switch
          checked={this.state.checkedB}
          onChange={(e) => { this.handleChange(e) }}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <h2 color='orange'>Orange Sherbet</h2> 
        </div>
        <div className='Herbal Meadows'>
          <Switch inputProps={{ 'aria-label': 'primary checkbox' }}
          checked={this.state.checkedC}
          onChange={(e) => { this.handleChange(e) }}/>

          <h2 color='orange'>Herbal Meadows</h2> 
        </div>
      </div>
    );
  }
}