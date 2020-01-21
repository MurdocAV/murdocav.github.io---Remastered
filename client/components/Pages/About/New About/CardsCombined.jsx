import React from 'react'
import StrengthsLimitations from './Values/StrengthsLimitations'
import RoutineStructure from './Values/RoutineStructure'
import CardC from './CardC'

class CardsCombined extends React.Component {
  
  // Insert function to go through the tile data and out put useful stuff to each card bro.


  render () {
    
    return (
      <React.Fragment>
        <div className='cardsCombined'>
          <div className="cardExternal cardA"><StrengthsLimitations></StrengthsLimitations></div>
          <div className="cardExternal cardB"><RoutineStructure></RoutineStructure></div>
          <div className="cardExternal cardC"><CardC></CardC></div>
        </div>
      </React.Fragment>
    )
  }
}

export default CardsCombined