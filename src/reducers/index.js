import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-react-router'
import posts from './posts'

export default combineReducers({
  posts,
  routing: routerStateReducer
})
