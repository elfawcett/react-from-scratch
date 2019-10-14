import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { ICombinedState } from '../types';

export const createMockStore = configureMockStore<Partial<ICombinedState>>();

export const createMountRender = (Component: any, defaultProps = {}) => (props = {}) =>
  mount(<Component {...defaultProps} {...props} />);
