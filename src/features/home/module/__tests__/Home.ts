import HomeReducer, {
  fetchHighlights,
  initialState,
  resetHome,
} from '../Home';
import API from '../../../../api/API';
import {configureStore} from '@reduxjs/toolkit';

describe('Home module', () => {
  const store = configureStore({
    reducer: HomeReducer,
  });

  describe('actions', () => {
    it('should able to fetch highlights', () => {
      store.dispatch(fetchHighlights());
      expect(API.get).toHaveBeenCalledWith(`/highlights`);
    });

    it('should resets the state when called action resetPodcasts', () => {
      store.dispatch(resetHome());
      const state = store.getState();
      expect(state).toEqual(initialState);
    });
  });

  describe('reducers', () => {
    it('sets loading true when fetching highlights is pending', () => {
      const action = {type: fetchHighlights.pending.type};
      const state = HomeReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: true,
        hasFailed: false,
      });
    });

    it('sets the highlights and meta when fetchPodcasts is fulfilled', () => {
      const action = {
        type: fetchHighlights.fulfilled.type,
        payload: {
          data: {},
        },
      };
      const state = HomeReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: false,
        hasFailed: false
      });
    });

    it('sets loading false when fetching highlights is rejected', () => {
      const action = {
        type: fetchHighlights.rejected.type,
        payload: {error: 'some error'},
      };
      const state = HomeReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: false,
        hasFailed: true,
      });
    });
  });
});
