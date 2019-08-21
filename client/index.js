import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as THREE from 'three'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import pageReducer from './reducers/index'

const store = createStore(pageReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
