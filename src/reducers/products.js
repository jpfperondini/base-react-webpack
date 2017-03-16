const addProduct = (state, product) => ([
  ...state,
  product
])

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return addProduct(state, action.product)
    default:
      return state
  }
}
