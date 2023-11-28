import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './RootReducer';
import Reactotron from '../../ReactotronConfig';

export const store = configureStore({
  reducer: rootReducer,
  // @ts-ignore
  enhancers: [Reactotron.createEnhancer()],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
