import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import reducer from './reducers'
import Root from './containers/Root'

const store = createStore(reducer)

render(
  <Root store={store} history={hashHistory} />,
  document.getElementById('app')
)