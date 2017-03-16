import { connect } from 'react-redux'
import { addProduct } from '../actions'
import Product from '../models/Product'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(addProduct(new Product(1, 'Product 1')))
    this.props.dispatch(addProduct(new Product(2, 'Product 2')))
  }
  render () {
    return <div>
      <h1> My Page </h1>
      {this.props.children}
    </div>
  }
}

export default connect(null, mapDispatchToProps)(App)
