import  libraryReduser  from './library/librarySlice';
import { configureStore } from "@reduxjs/toolkit";
import sandwichReducer from "./sandwich/sandwichSlice";
import counterReducer from "./counter/counterSlice";


export const storeRTK = configureStore({
  reducer: {
    sandwich: sandwichReducer,
    counter: counterReducer,
    library: libraryReduser
  },
});

export type RootState = ReturnType<typeof storeRTK.getState>;
