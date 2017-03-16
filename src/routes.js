import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Products from './containers/Products'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/products" component={Products} />
  </Route>
)