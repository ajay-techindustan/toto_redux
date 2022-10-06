import { TODO_ADD } from "./todoType";

export const todoAction = (input) => {
    return {
        type: TODO_ADD,
        payload: input
    }
}