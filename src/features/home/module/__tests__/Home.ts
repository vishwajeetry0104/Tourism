import HomeReducer, {
  fetchHighlights,
  fetchCategories,
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
      expect(API.get).toHaveBeenCalledWith(`/v1/highlights`);
    });

    it('should able to fetch highlights', () => {
      store.dispatch(fetchCategories());
      expect(API.get).toHaveBeenCalledWith(`/v1/categories`);
    });

    it('should resets the state when called action resetPodcasts', () => {
      store.dispatch(resetHome());
      const state = store.getState();
      expect(state).toEqual(initialState);
    });
  });

  describe('reducers', () => {
    describe('fetch highlights', () => {
      it('sets loading true when fetching highlights is pending', () => {
        const action = {type: fetchHighlights.pending.type};
        const state = HomeReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          loadingHighlights: true
        });
      });

      it('sets the highlights and meta when highlights is fulfilled', () => {
        const action = {
          type: fetchHighlights.fulfilled.type,
          payload: [],
        };
        const state = HomeReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          highLights: []
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
          loadingHighlights: false,
          hasHighlightsFailed: true,
        });
      });
    });

    describe('fetch categories', () => {
      it('sets loading true when fetching categories is pending', () => {
        const action = {type: fetchCategories.pending.type};
        const state = HomeReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          loadingCategories: true
        });
      });

      it('sets the highlights and meta when categories is fulfilled', () => {
        const action = {
          type: fetchCategories.fulfilled.type,
          payload: [],
        };
        const state = HomeReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          categories: []
        });
      });

      it('sets loading false when fetching categories is rejected', () => {
        const action = {
          type: fetchCategories.rejected.type,
          payload: {error: 'some error'},
        };
        const state = HomeReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          hasCategoriesFailed: true,
        });
      });
    });
  });
});
