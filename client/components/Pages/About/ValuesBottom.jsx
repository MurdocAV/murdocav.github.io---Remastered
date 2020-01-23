import React from 'react'
import GettingUnstuck from './Values/GettingUnstuck'
import AttentionEI from './Values/AttentionEI'
import WindingDown from './Values/WindingDown'

class ValuesTop extends React.Component {
  
  // Insert function to go through the tile data and out put useful stuff to each card bro.


  render () {
    
    return (
      <React.Fragment>
        <div className='cardsCombined'>
          <div className="cardExternal cardA"><GettingUnstuck></GettingUnstuck></div>
          <div className="cardExternal cardB"><WindingDown></WindingDown></div>
          <div className="cardExternal cardC"><AttentionEI></AttentionEI></div>
        </div>
      </React.Fragment>
    )
  }
}

export default ValuesTop