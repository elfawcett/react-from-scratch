import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { TAppState } from '../store';

export const createMockStore = configureMockStore<Partial<TAppState>>();

export const createMountRender = (Component: any, defaultProps = {}) => (props = {}) =>
  mount(<Component {...defaultProps} {...props} />);
