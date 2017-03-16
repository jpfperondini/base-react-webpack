const renderList = products => products.map(product =>
    <div key={product.id}>{ product.text }</div>
)

class ProductsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { products: props.products }
  }
  componentWillReceiveProps(props) {
    this.setState(props.products)
  }
  render() {
    return <div>{ renderList(this.state.products) }</div>
  }
}

ProductsList.propTypes = {
  products: React.PropTypes.array
}

export default ProductsList
