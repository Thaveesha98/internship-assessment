import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characters/characterSlice";

const Store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export default Store;
