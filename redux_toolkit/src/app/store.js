import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})

// Never mutate the state
// ONE Application is having only one store that is single sorce of truth
// 