import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from "../features/tasks/task-slice";



export const store = configureStore({
  reducer: {
    tasks: tasksReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
