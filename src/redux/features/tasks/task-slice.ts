import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Tarea 1",
    description: "tarea 1 descripcion",
    completed: false,
  },
  {
    id: "2",
    title: "Tarea 2",
    description: "tarea 2 descripcion",
    completed: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {},
});

export default tasksSlice.reducer;
