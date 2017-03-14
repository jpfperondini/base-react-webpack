import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import Home from './pages/home.jsx';
import Products from './pages/products.jsx';

const store = createStore(reducer)

class App extends React.Component {
  render () {
    return <div>
      <h1> My Page </h1>
      {this.props.children}
    </div>;
  }
}

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="products" component={Products}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))