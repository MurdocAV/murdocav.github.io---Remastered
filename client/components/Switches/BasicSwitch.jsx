import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div 
      style={{
        backgroundColor: 'white',
        margin: 'auto',
      }}
    >
      <div className='Classic Neon'>
        <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <h2 color='pink'>Classic Neon</h2> 
      </div>
      <div className='Orange Sherbet'>
        <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <h2 color='orange'>Orange Sherbet</h2> 
      </div>
      <div className='Herbal Meadows'>
        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
        <h2 color='orange'>Herbal Meadows</h2> 
      </div>
    </div>
  );
}