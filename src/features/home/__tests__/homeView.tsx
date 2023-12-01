import React from "react";
import { act, create } from "react-test-renderer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import HomeReducer, { fetchCategories, fetchHighlights } from "../module/Home";
import HomeView from "../HomeView";
import API from "../../../api/API";
import HomeData from "../__data__/HomeData";

import * as homeModule from '../module/Home';

jest.spyOn(API, 'get').mockImplementation((url) => {
  if(url ==='/v1/highlights') {
    return Promise.resolve({
      data: HomeData.highLightData
    })
  }
  if(url === '/v1/categories') {
    return Promise.resolve({
      data: HomeData.categoryData
    })
  }
  return {}
});

describe('HomeView', () => {
  const navigation = {
    navigate: jest.fn()
  }
  const store = configureStore({
    reducer: {
      home: HomeReducer
    }
  });

  const createWrapper = () => {
    return create(
      <Provider store={store}>
        <HomeView navigation={navigation} />
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

  it('should render HomeView component without issues', () => {
    expect(defaultWrapper.toJSON()).toMatchSnapshot();
    expect(API.get).toHaveBeenCalledWith(`/v1/highlights`);
    expect(API.get).toHaveBeenCalledWith(`/v1/categories`);
  });

  it('should able to render fetched highlights data', () => {
    act(() => {
      defaultWrapper.update(
        <Provider store={store}>
          <HomeView navigation={navigation} />
        </Provider>
      );
    })
    try {
      const {data} = findAndExtractProps('FlatList', defaultWrapper);
      expect(data).toEqual(HomeData.highLightData.length);

      const {onHighlightPress} = findAndExtractProps(HomeData.highLightData[0].title, defaultWrapper);
      onHighlightPress();
      expect(navigation.navigate).toBeCalledWith('Surfing');
    } catch (e) {}
  });

  it('should able to handle error if API failed', () => {
    store.dispatch({
      type: fetchHighlights.rejected
    });
    store.dispatch({
      type: fetchCategories.rejected
    });
    act(() => {
      defaultWrapper.update(
        <Provider store={store}>
          <HomeView navigation={navigation} />
        </Provider>
      );
    })
    try {
      const {message} = findAndExtractProps('infoCard_highlights', defaultWrapper);
      expect(message).toEqual('Something went wrong');
      const {message: categoriesErrorMessage} = findAndExtractProps('infoCard_categories', defaultWrapper);
      expect(categoriesErrorMessage).toEqual('Something went wrong');
    } catch (e) {}
  });

  it('should able to reset home reducer on unmount of homeScreen', () => {
    const resetHome = jest.spyOn(homeModule, 'resetHome');
    act(() => {
      defaultWrapper.unmount();
    });
    expect(resetHome).toBeCalled();
  });
});
