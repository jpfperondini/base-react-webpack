import {render} from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './pages/home.jsx';
import Products from './pages/products.jsx';

class App extends React.Component {
  render () {
    return <div>
      <h1> My Page </h1>
      {this.props.children}
    </div>;
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="products" component={Products}/>
    </Route>
  </Router>
), document.getElementById('app'))
