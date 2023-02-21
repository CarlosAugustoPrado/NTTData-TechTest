import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    movie: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    resetSearch: (state) => {
      state.searchTerm = "";
      state.movie = null;
    },
  },
});

export const { setSearchTerm, setMovie, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
