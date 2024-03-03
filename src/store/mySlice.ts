import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "mySlice",
  initialState: {
    count: 0,
    todo: ["1", "2", "3"],
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    addTodo(state, action) {
      state.todo.push(action.payload);
    },
    removeTodo(state) {
      state.todo.pop();
    },
  },
});

export default mySlice.reducer;
export const { increment, decrement, addTodo, removeTodo } = mySlice.actions;
