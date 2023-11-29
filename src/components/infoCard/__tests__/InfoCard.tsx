import React from 'react';
import {act, create} from 'react-test-renderer';
import InfoCard from '../InfoCard';

describe('InfoCard', () => {
  const props = {
    headingTitle: 'Testing title',
    message: 'Nothing to display'
  };

  const createWrapper = (updatedProps = props) => {
    return create(<InfoCard {...updatedProps} />);
  };

  let defaultWrapper;

  act(() => {
    defaultWrapper = createWrapper();
  });

  afterAll(() => {
    defaultWrapper.unmount();
  });

  it('should render InfoCard component without issues', () => {
    expect(defaultWrapper).toMatchSnapshot();
  });
});
