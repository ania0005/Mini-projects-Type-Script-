import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

interface IAddBookPayload {
  title: string;
  author: string;
  year: string;
}

const initialState = {
  books: [
    {
      isbn: "6s38w44",
      title: "Крутой маршрут",
      author: "Евгения Гинзбург",
      year: "1967",
    },
  ],
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IAddBookPayload>) => {
      state.books.push({
        isbn: uid(),
        ...action.payload,
      });
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      state.books.splice(action.payload, 1);
    },
  },
});

export const { addBook, deleteBook } = librarySlice.actions;
export default librarySlice.reducer;
