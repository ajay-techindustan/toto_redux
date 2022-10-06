import {createStore, combileReducers, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import thunk from  'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import rootReducer from './rootReducer'
import todoReducer from './todo/todoReducer'

// const store = createStore (rootReducer (applyMiddleware(logger,thunk)))
const store = createStore (todoReducer )


export default store