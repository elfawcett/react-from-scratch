import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { Pages } from '../../constants';
import { configureStore } from '../../store';
import { setCurrentPage } from '../../store/system/actions';

import { App } from '../App';

const store = configureStore();

describe(`<App />`, () => {
  it(`renders the landing page`, () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.containsMatchingElement(<h2>Landing Page</h2>)).toBe(true);
  });

  it(`renders page not found for unknown pages`, () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    store.dispatch(setCurrentPage('FAKEPAGE' as Pages));
    wrapper.update();

    expect(wrapper.containsMatchingElement(<h2>Page Not Found</h2>)).toBe(true);
  });

  it(`changes page on store update`, () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    store.dispatch(setCurrentPage(Pages.FAVORITEJOKES));
    wrapper.update();

    expect(wrapper.containsMatchingElement(<h2>My Favorite Jokes</h2>)).toBe(true);
  });
});
