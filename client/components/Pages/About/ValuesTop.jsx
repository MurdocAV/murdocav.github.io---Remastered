import React from 'react'
import StrengthsLimitations from './Values/StrengthsLimitations'
import RoutineStructure from './Values/RoutineStructure'
import Learning from './Values/Learning'

class ValuesTop extends React.Component {
  
  // Insert function to go through the tile data and out put useful stuff to each card bro.

  render () {
    
    return (
      <React.Fragment>
        <div className='cardsCombined'>
          <div className="cardExternal cardA"><StrengthsLimitations></StrengthsLimitations></div>
          <div className="cardExternal cardB"><Learning></Learning></div>
          <div className="cardExternal cardC"><RoutineStructure></RoutineStructure></div>
        </div>
      </React.Fragment>
    )
  }
}

export default ValuesTop