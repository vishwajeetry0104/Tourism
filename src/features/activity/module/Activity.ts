import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import API from '../../../api/API';

type Activity = {
  name: string
}

type ActivityDetail = {
  name: string,
  description: string,
  image: string,
  activities: Array<Activity>
}

interface InitialStateType {
  loading: boolean;
  activityTypes: {
    'Surfing': ActivityDetail,
    'Traditional Festivals': ActivityDetail,
    'Volcanoes': ActivityDetail
  };
  hasFailed: boolean;
}

const defaultActivityDetail = {
  name: '',
  description: '',
  image: '',
  activities: []
};

export const initialState: InitialStateType = {
  loading: false,
  activityTypes: {
    'Surfing': defaultActivityDetail,
    'Traditional Festivals': defaultActivityDetail,
    'Volcanoes': defaultActivityDetail
  },
  hasFailed: false
};

export const fetchActivityDetail = createAsyncThunk('activity/details', async ({activityType}: {activityType: string}) => {
  const response = await API.get(`/v1/activities/${activityType}`);
  return response?.data;
});

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    resetActivity: (state: InitialStateType) => {
      state.activityTypes = {
        'Surfing': defaultActivityDetail,
        'Traditional Festivals': defaultActivityDetail,
        'Volcanoes': defaultActivityDetail
      };
      state.loading = false;
      state.hasFailed = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchActivityDetail.fulfilled,
      (state: InitialStateType, action: PayloadAction<ActivityDetail, any, {arg: {activityType: string}}>) => {
        const {activityType} = action?.meta?.arg ?? {activityType: ''};
        state.activityTypes[activityType] = action.payload;
        state.loading = false;
        state.hasFailed = false;
      },
    );
    builder.addCase(fetchActivityDetail.pending, (state: InitialStateType) => {
      state.loading = true;
      state.hasFailed = false;
    });
    builder.addCase(fetchActivityDetail.rejected, (state: InitialStateType) => {
      state.loading = false;
      state.hasFailed = true;
    });
  },
});

export const {resetActivity} = activitySlice.actions;

export default activitySlice.reducer;
