import ActivityReducer, {
  fetchActivityDetail,
  initialState,
  resetActivity
} from '../Activity';
import API from '../../../../api/API';
import {configureStore} from '@reduxjs/toolkit';

describe('Home module', () => {
  const store = configureStore({
    reducer: ActivityReducer,
  });

  describe('actions', () => {
    it('should able to fetch highlights', () => {
      store.dispatch(fetchActivityDetail({activityType: 'Volcanoes'}));
      expect(API.get).toHaveBeenCalledWith(`/v1/activities/Volcanoes`);
    });

    it('should resets the state when called action resetPodcasts', () => {
      store.dispatch(resetActivity());
      const state = store.getState();
      expect(state).toEqual(initialState);
    });
  });

  describe('reducers', () => {
    describe('fetch highlights', () => {
      it('sets loading true when fetching highlights is pending', () => {
        const action = {type: fetchActivityDetail.pending.type};
        const state = ActivityReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          loading: true
        });
      });

      it('sets the highlights and meta when highlights is fulfilled', () => {
        const payload = {
          name: 'test',
          description: 'test',
          image: 'www.test.com/test.png',
          activities: [{}]
        }
        const action = {
          type: fetchActivityDetail.fulfilled.type,
          payload,
          meta: {
            arg: {
              activityType: 'Surfing'
            }
          }
        };
        const state = ActivityReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          activityTypes: {
            ...initialState.activityTypes,
            'Surfing': payload
          }
        });
      });

      it('sets loading false when fetching highlights is rejected', () => {
        const action = {
          type: fetchActivityDetail.rejected.type,
          payload: {error: 'some error'},
        };
        const state = ActivityReducer(initialState, action);
        expect(state).toEqual({
          ...initialState,
          loading: false,
          hasFailed: true,
        });
      });
    });
  });
});
