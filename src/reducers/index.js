import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-react-router'
import products from './products'

export default combineReducers({
    products,
    routing: routerStateReducer
})