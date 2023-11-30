import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import API from '../../../api/API';

type Highlight = {
  title: string,
  description: string,
  image: string
}

type Category = {
  name: string,
  activities: Array<{
    title: string
  }>
}

interface InitialStateType {
  loadingHighlights: boolean;
  loadingCategories: boolean;
  highLights: Array<Highlight>;
  categories: Array<Category>;
  hasHighlightsFailed: boolean;
  hasCategoriesFailed: boolean;
}

export const initialState: InitialStateType = {
  loadingHighlights: false,
  loadingCategories: false,
  highLights: [],
  categories: [],
  hasHighlightsFailed: false,
  hasCategoriesFailed: false,
};

export const fetchHighlights = createAsyncThunk('home/highlights', async () => {
  const response = await API.get('/v1/highlights');
  return response?.data;
});

export const fetchCategories = createAsyncThunk('home/categories', async () => {
  const response = await API.get('/v1/categories');
  return response?.data;
});

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetHome: (state: InitialStateType) => {
      state.highLights = [];
      state.loadingHighlights = false;
      state.hasHighlightsFailed = false;
      state.categories = [];
      state.loadingCategories = false;
      state.hasCategoriesFailed = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchHighlights.fulfilled,
      (state: InitialStateType, action: PayloadAction<Array<Highlight>>) => {
        state.highLights = action.payload;
        state.loadingHighlights = false;
        state.hasHighlightsFailed = false;
      },
    );
    builder.addCase(fetchHighlights.pending, (state: InitialStateType) => {
      state.loadingHighlights = true;
      state.hasHighlightsFailed = false;
    });
    builder.addCase(fetchHighlights.rejected, (state: InitialStateType) => {
      state.loadingHighlights = false;
      state.hasHighlightsFailed = true;
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state: InitialStateType, action: PayloadAction<Array<Category>>) => {
        state.categories = action.payload;
        state.loadingCategories = false;
        state.hasCategoriesFailed = false;
      },
    );
    builder.addCase(fetchCategories.pending, (state: InitialStateType) => {
      state.loadingCategories = true;
      state.hasCategoriesFailed = false;
    });
    builder.addCase(fetchCategories.rejected, (state: InitialStateType) => {
      state.loadingCategories = false;
      state.hasCategoriesFailed = true;
    });
  },
});

export const {resetHome} = homeSlice.actions;

export default homeSlice.reducer;
