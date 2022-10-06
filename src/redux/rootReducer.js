import { combineReducers } from "redux";
// import userReducer from './user/userReducer'
import todoReducer from './todo/todoReducer'

const rootReducer = combineReducers ( {
    tododata : todoReducer
})

export default rootReducer