import React from 'react'
import Card from '@material-ui/core/Card'
import CardsCombined from './New About/CardsCombined'
import CardsRowTwo from './New About/CardsRowTwo'

export default class NewAbout extends React.Component {
  render() {

      return (
          <div className="mainComponent">
            <CardsCombined></CardsCombined>
            <CardsRowTwo></CardsRowTwo>
          </div>
      )
  }
}