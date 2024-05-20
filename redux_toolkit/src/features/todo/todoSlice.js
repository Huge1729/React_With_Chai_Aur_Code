import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    // state 
    todos: [{ id: 1, text: "Hello world" }]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // remove krne ke liye action se id aayi hogii
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        // updateTodo


        // DeleteTodo

    }
})

export const { addTodo, removeTodo } = todoSlice.actions  // ye sarre componets me transfer krne ke liye

export default todoSlice.reducer    // ye help karega saare reducers to store me pake krne ke liyee.


// Slice means simply features
// state me updated store values mitlti hai and
// Action me action.payload

// Courier --->dispatch()
