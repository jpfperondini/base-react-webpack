import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const mapStateToProps = (state) => ({
  products: state.products
})

class Products extends React.Component {
  render() {
    return <div>
      <h1> Products </h1>
      <ProductList products={ this.props.products }/>
    </div>
  }
}

Products.propTypes = {
  products: React.PropTypes.array
}

export default connect(mapStateToProps)(Products)
