import React from 'react'
import { hashHistory as history, Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'

import reducer from './reducers'
import routes from './routes'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
