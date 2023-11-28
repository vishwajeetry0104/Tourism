import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import API from '../../../api/API';

interface InitialStateType {
  loading: boolean;
  data: [];
  hasFailed: boolean;
}

export const initialState: InitialStateType = {
  loading: false,
  data: [],
  hasFailed: false,
};

export const fetchHighlights = createAsyncThunk('home/highlights', async () => {
  const response = await API.get('/highlights');
  return response?.data;
});

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetHome: (state: InitialStateType) => {
      state.data = [];
      state.loading = false;
      state.hasFailed = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchHighlights.fulfilled,
      (state: InitialStateType, action: PayloadAction<any>) => {
        state.loading = false;
        state.hasFailed = false;
      },
    );
    builder.addCase(fetchHighlights.pending, (state: InitialStateType) => {
      state.loading = true;
      state.hasFailed = false;
    });
    builder.addCase(fetchHighlights.rejected, (state: InitialStateType) => {
      state.loading = false;
      state.hasFailed = true;
    });
  },
});

export const {resetHome} = homeSlice.actions;

export default homeSlice.reducer;
