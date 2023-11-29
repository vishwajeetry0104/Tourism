import React from 'react';
import {act, create} from 'react-test-renderer';
import Spinner from '../Spinner';

describe('Spinner', () => {
  const props = {
    animating: true
  };

  const createWrapper = (updatedProps = props) => {
    return create(<Spinner {...updatedProps} />);
  };

  let defaultWrapper;

  act(() => {
    defaultWrapper = createWrapper();
  });

  afterAll(() => {
    defaultWrapper.unmount();
  });

  it('should render Spinner component without issues', () => {
    expect(defaultWrapper).toMatchSnapshot();
  });

  it('should render spinner with color', () => {
    const updatedProps = {
      ...props,
      color: '#000000'
    };
    let wrapper;
    act(() => {
      wrapper = createWrapper(updatedProps);
    });
    expect(wrapper).toMatchSnapshot();
  });
});
