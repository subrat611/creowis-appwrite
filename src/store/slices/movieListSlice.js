import appwriteService from "@/appwrite/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Query } from "appwrite";

const initialState = {
  data: [],
  status: "idle", // loading | success | failed
};

export const getMovies = createAsyncThunk(
  "getMovies",
  async (payload, thunkAPI) => {
    let queries = [Query.limit(10), Query.offset((payload.page - 1) * 10)];
    const response = await appwriteService.getMovies(queries);

    if (!response) return thunkAPI.rejectWithValue(response);

    return response;
  }
);

const movieList = createSlice({
  name: "movieList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state, _) => {
      state.status = "loading";
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload?.documents];
      state.status = "success";
    });
    builder.addCase(getMovies.rejected, (state, _) => {
      state.status = "failed";
      state.data = null;
    });
  },
});

// export const {} = authSlice.actions;
export default movieList.reducer;
