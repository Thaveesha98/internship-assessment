import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {Pending,Fulfilled,Rejected} from '../../constants'

export const fetchCharactersApi = async (page = 1) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/character/?page=${page}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch characters: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page = 1) => {
    return await fetchCharactersApi(page);
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    info: null,
    page: 1, 
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = Pending;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = Fulfilled;
        state.data = action.payload.results;
        state.info = action.payload.info;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = Rejected;
        state.error = action.error.message;
      });
  },
});

export const { setPage } = charactersSlice.actions;
export default charactersSlice.reducer;
