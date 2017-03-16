import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

class Products extends React.Component {
  componentWillMount() {
    this.props.dispatch({type: 'ADD_PRODUCT', id: 1, text: 'Gabriel'})
    this.props.dispatch({type: 'ADD_PRODUCT', id: 2, text: 'Mari'})
  }
  render () {
    console.log('render -> ', this.props.products)
    return <h1> Products </h1>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
