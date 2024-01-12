import appwriteService from "@/appwrite/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle", // loading | success | failed
};

export const getMovies = createAsyncThunk("getMovies", async (_, thunkAPI) => {
  const response = await appwriteService.getMovies();

  if (!response) return thunkAPI.rejectWithValue(response);

  return response;
});

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
