import { TODO_ADD } from "./todoType";

const initialState = {
    todo : []
};

const todoReducer = ( state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type){
        case TODO_ADD : return {
            ...state,

            todo : [
                ...state.todo,
                action.payload
                
            ]
        }
        default : return state
    }
}

export default todoReducer