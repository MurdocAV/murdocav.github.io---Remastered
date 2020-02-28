import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Documentation from './Pages/Documentation'
import Navigation from './Header/Navigation'
import anime from 'animejs/lib/anime.es.js';

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      example: 'Hello World',
      moving: 'Move Around',
      colorState: false,
      color: '#FF69B4'
    }
  }

  moveAroundHandler = (evt) => {
    evt.preventDefault()

    if (this.state.moving == 'Move Around') {
      anime({
        targets: '.postRenderedTag',
        translateX: [
          {value: -250, duration: 1000, delay: 0},
          {value: 0, duration: 1000, delay: 0},        
          {value: 250, duration: 1000, delay: 0},
          {value: 0, duration: 1000, delay: 0}
        ],
        easing: 'linear',
        loop: true
      });

      this.setState({
        moving: 'Stop Moving'
      })

    } else if (this.state.moving != 'Move Around') {
      anime.remove('.postRenderedTag')
      
      this.setState({
        moving: 'Move Around'
      })
    }
  }

  changeLookHandler = (evt) => {
    evt.preventDefault()

    anime({
      targets: '.postRenderedTag',
      color: this.state.color,
      easing: 'easeInOutQuad'
    })

    if (this.state.color == '#FF69B4') {
      this.setState({color: '#000000'})
    } else if (this.state.color != '#FF69B4') {
      this.setState({
        color: '#FF69B4'
      })
    }

  }

  changeWordingHandler = (evt) => {
    evt.preventDefault()

    if (this.state.example != 'Hello World') {
      anime({
        targets: '.postRenderedTag',
        easing: 'linear',
        update: this.setState({
          example: 'Hello World'
        })
      })    
    } else {
      anime({
        targets: '.postRenderedTag',
        easing: 'linear',
        update: this.setState({
          example: 'You changed the World. Hello.'
        })
      })
    }

    // Setting state to something new.
  }
  
  render () {
    return (
      <HashRouter>
        <Navigation></Navigation>
        <div className="wrapperDiv">
          <h1>AnimeJS On Text</h1>
          <button className="moving"
            onClick={this.moveAroundHandler}
          >{this.state.moving}
          </button>
          <br></br>
          <button className="" onClick={this.changeLookHandler}>
            Change look
          </button>
          <button className="" onClick={this.changeWordingHandler}>
            Change wording
          </button>
          <div className="innerDiv">
            <div className="animationDiv"></div>
          </div>
        </div>
        <br/>
        <p className="postRenderedTag">{this.state.example}</p>
        <Route exact path="/Documentation" component={Documentation} /> 
      </HashRouter>
    )
  }
}         

export default App