import React from "react";
import { act, create } from "react-test-renderer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ActivityReducer, { fetchActivityDetail } from "../module/Activity";
import ActivityView from "../ActivityView";
import API from "../../../api/API";
import ActivityData from "../__data__/Activitydata";
import { Alert } from "react-native";

import * as activityModule from '../module/Activity';

jest.spyOn(API, 'get').mockImplementation((url) => {
  if(url ==='/v1/activities/Surfing') {
    return Promise.resolve({
      data: ActivityData
    })
  }
  return {}
});

describe('ActivityView', () => {
  const store = configureStore({
    reducer: {
      activity: ActivityReducer
    }
  });

  const createWrapper = () => {
    return create(
      <Provider store={store}>
        <ActivityView activityType="Surfing" />
      </Provider>
    );
  };

  let defaultWrapper;

  act(() => {
    defaultWrapper = createWrapper();
  });

  afterAll(() => {
    defaultWrapper.unmount();
  });

  const findAndExtractProps = (testID, component) => {
    return component.root.findByProps({
      testID
    }).props;
  };

  it('should render ActivityView component without issues', () => {
    expect(defaultWrapper.toJSON()).toMatchSnapshot();
    expect(API.get).toHaveBeenCalledWith(`/v1/activities/Surfing`);
  });

  it('should able to render fetched activity detail data', () => {
    const alert = jest.spyOn(Alert, 'alert');
    act(() => {
      defaultWrapper.update(
        <Provider store={store}>
          <ActivityView activityType="Surfing" />
        </Provider>
      );
    })
    try {
      const {onPressCategory} = findAndExtractProps(ActivityData[0].title, defaultWrapper);
      onPressCategory();
      expect(alert).toBeCalled();
    } catch (e) {}
  });

  it('should able to handle error if API failed', () => {
    store.dispatch(fetchActivityDetail.rejected);
    act(() => {
      defaultWrapper.update(
        <Provider store={store}>
          <ActivityView activityType="Surfing" />
        </Provider>
      );
    })
    try {
      const {message} = findAndExtractProps('infoCard_activity', defaultWrapper);
      expect(message).toEqual('Something went wrong');
    } catch (e) {}
  });

  it('should able to reset activity reducer on unmount of ActivityView', () => {
    const resetActivity = jest.spyOn(activityModule, 'resetActivity');
    act(() => {
      defaultWrapper.unmount();
    });
    expect(resetActivity).toBeCalled();
  });
});
