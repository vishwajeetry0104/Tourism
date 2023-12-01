import React from 'react';
import {act, create} from 'react-test-renderer';
import Header from '../Header';

describe('Header', () => {
  const createWrapper = (updatedProps = {}) => {
    return create(<Header {...updatedProps} />);
  };

  let defaultWrapper;

  act(() => {
    defaultWrapper = createWrapper();
  });

  afterAll(() => {
    defaultWrapper.unmount();
  });

  it('should render Header component without issues', () => {
    expect(defaultWrapper).toMatchSnapshot();
  });
});
