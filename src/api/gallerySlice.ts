import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Result } from "../types/types.ts";

interface DataState {
  input: string;
  inputReq: string;
  data: Result[];
  page: number;
}

const initialState: DataState = {
  input: "",
  inputReq: "",
  data: [],
  page: 1,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Result[]>) => {
      state.data.push(...action.payload);
    },
    nextPage: (state) => {
      state.page += 1;
    },
    resetData: (state) => {
      state.data = [];
      state.page = 1;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setInputReq: (state, action) => {
      state.inputReq = action.payload;
    },
  },
});

export const { addData, nextPage, resetData, setInput, setInputReq } =
  dataSlice.actions;
export default dataSlice.reducer;
